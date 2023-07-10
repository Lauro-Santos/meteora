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

// Função auxiliar para remover acentuações
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const Home = () => {
  const [showModalEmail, setShowModalEmail] = useState(false);
  const [showModalProduct, setShowModalProduct] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  const [isProductNotFound, setIsProductNotFound] = useState(false);

  const urlDb =
    "https://raw.githubusercontent.com/Lauro-Santos/meteora-data/main/db.json";

  const openModalProduct = (item) => {
    setSelectedItem(item);
    setShowModalProduct(true);
  };

  const closeModalProduct = () => {
    setShowModalProduct(false);
  };

  const openModalEmail = () => {
    setShowModalEmail(true);
  };

  const closeModal = () => {
    setShowModalEmail(false);
  };

  async function fetchData() {
    setIsLoading(true);

    try {
      const { data } = await axios.get(urlDb);
      setItems(data.products);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
      setIsLoading(false);
    }
  }

  const filterItems = (category) => {
    const filteredItems = items.filter((item) =>
      removeAccents(item.category.toLowerCase()).includes(
        removeAccents(category.toLowerCase())
      )
    );
    setFilteredItem(filteredItems);
    setIsLoading(false);
  };

  const searchItems = (searchTerm) => {
    const lowercaseSearchTerm = removeAccents(searchTerm.toLowerCase());
    const researchedItems = items.filter((item) => {
      const lowercaseTitle = removeAccents(item.title.toLowerCase());
      const lowercaseCategory = removeAccents(item.category.toLowerCase());
      return (
        lowercaseTitle.includes(lowercaseSearchTerm) ||
        lowercaseCategory.includes(lowercaseSearchTerm)
      );
    });

    setFilteredItem(researchedItems);
    setIsLoading(false);
    setIsProductNotFound(researchedItems.length === 0);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        closeModal();
        closeModalProduct();
      }
    };

    if (showModalProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleScroll = () => {
      closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [showModalProduct, showModalEmail]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header searchReturn={searchItems} />

      <main>
        <Banner />
        <Categories filterItems={filterItems} />
        {isLoading ? (
          <Loading />
        ) : (
          <Products
            openModal={openModalProduct}
            items={filteredItem.length !== 0 ? filteredItem : items}
            loading={isLoading}
          />
        )}
        <Facilities />
        <EmailFrom openModal={openModalEmail} />
      </main>

      <Footer />

      {showModalProduct && (
        <ProductsModal
          selectedItem={selectedItem}
          onClose={closeModalProduct}
        />
      )}

      {showModalEmail && <EmailModal onClose={closeModal} />}
    </>
  );
};

export default Home;