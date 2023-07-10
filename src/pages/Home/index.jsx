import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "components/Banner";
import Categories from "components/Categories";
import EmailFrom from "components/EmailForm";
import EmailModal from "components/EmailForm/EmailModal";
import Facilities from "components/Facilities";
import Footer from "components/Footer";
import Header from "components/Header";
import Products from "components/Products";
import ProductsModal from "components/Products/ProductsModal";
import Loading from "components/Loading";

const Home = () => {
  // Definindo os estados usando o hook useState
  const [showModalEmail, setShowModalEmail] = useState(false);
  const [showModalProduct, setShowModalProduct] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // Array de objetos que representam os itens de produtos
  const [items, setItems] = useState([]);
  const [filteredItem, setfilteredItem] = useState("");
  const [isProductNotFound, setIsProductNotFound] = useState(false);

  const urlDb =
    "https://raw.githubusercontent.com/Lauro-Santos/meteora-data/main/db.json";

  // Função para abrir o modal de produto
  const openModalProduct = (item) => {
    setSelectedItem(item);
    setShowModalProduct(true);
  };

  // Função para fechar o modal de produto
  const closeModalProduct = () => {
    setShowModalProduct(false);
  };

  // Função para abrir o modal de e-mail
  const openModalEmail = () => {
    setShowModalEmail(true);
  };

  // Função para fechar o modal de e-mail
  const closeModal = () => {
    setShowModalEmail(false);
  };

  async function carregaDados() {
    setIsLoading(true); // Definir isLoading como true ao iniciar a carga de dados

    try {
      const response = await axios.get(urlDb);
      setItems(response.data.products);
      setIsLoading(false); // Definir isLoading como false após a carga de dados ser concluída
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
      setIsLoading(false); // Definir isLoading como false em caso de erro
    }
  }

  function filterItens(category) {
    const filteredItems = items.filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );
    setfilteredItem(filteredItems);
    setIsLoading(false);
  }

  //  Função para remover acentuações
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  // Função de busca
  function searching(event) {
    const searchTerm = event.toLowerCase();
    const researchedItems = items.filter((item) => {
      const lowercaseTitle = removeAccents(item.title.toLowerCase());
      const lowercaseCategory = removeAccents(item.category.toLowerCase());
      return (
        lowercaseTitle.includes(searchTerm) ||
        lowercaseCategory.includes(searchTerm)
      );
    });

    setfilteredItem(researchedItems);
    setIsLoading(false);
    setIsProductNotFound(researchedItems.length === 0); // Verificar se não foram encontrados produtos
  }

  // Efeito colateral para lidar com eventos do teclado e scroll
  useEffect(() => {
    // Função para lidar com o pressionar da tecla Esc
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        closeModal();
        closeModalProduct();
      }
    };

    if (showModalProduct) {
      // Impedir rolagem da tela quando o modal de produto está aberto
      document.body.style.overflow = "hidden";
    } else {
      // Habilitar rolagem da tela quando o modal de produto está fechado
      document.body.style.overflow = "auto";
    }

    // Função para lidar com o evento de scroll
    const handleScroll = () => {
      closeModal();
    };

    // Adicionar listeners de eventos
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);

    // Remover listeners de eventos e restaurar a rolagem da tela quando o componente é desmontado
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [showModalProduct, showModalEmail]);

  // Chamar a função carregaDados() quando o componente é montado
  useEffect(() => {
    carregaDados();
  }, []);

  return (
    <>
      {/* Renderizar o componente Header */}
      <Header searchReturn={searching} />

      <main>
        {/* Renderizar o componente Banner */}
        <Banner />

        {/* Renderizar o componente Categories */}
        <Categories filterItems={filterItens} />

        {/* Renderizar o componente Products e passar a função openModalProduct como prop */}
        {isLoading ? (
          <Loading />
        ) : (
          <Products
            openModal={openModalProduct}
            items={filteredItem.length !== 0 ? filteredItem : items}
            loading={isLoading}
          />
        )}

        {/* Renderizar o componente Facilities */}
        <Facilities />

        {/* Renderizar o componente EmailForm e passar a função openModalEmail como prop */}
        <EmailFrom openModal={openModalEmail} />
      </main>

      {/* Renderizar o componente Footer */}
      <Footer />

      {/* Renderizar o modal de produto apenas se showModalProduct for true */}
      {showModalProduct && (
        <ProductsModal
          selectedItem={selectedItem}
          onClose={closeModalProduct}
        />
      )}

      {/* Renderizar o modal de e-mail apenas se showModalEmail for true */}
      {showModalEmail && <EmailModal onClose={closeModal} />}
    </>
  );
};

export default Home;
