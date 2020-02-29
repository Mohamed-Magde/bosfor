import React, { Component } from "react";
import { gallery, featured, contact, header, footer } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    gallerys: [],
    features: [],
    contacts: [],
    headers: [],
    footers: []
  };

  componentDidMount() {
    this.setHeader();
    this.setGallery();
    this.setFeatures();
    this.setContacts();
    this.setFooter();
  }

  setHeader = () => {
    let headers = [];
    header.forEach(element => {
      const singleElement = { ...element };
      headers = [...headers, singleElement];
    });
    this.setState(() => {
      return { headers };
    });
  };

  setGallery = () => {
    let gallerys = [];
    gallery.forEach(element => {
      const singleElement = { ...element };
      gallerys = [...gallerys, singleElement];
    });
    this.setState(() => {
      return { gallerys };
    });
  };

  setFeatures = () => {
    let features = [];
    featured.forEach(element => {
      const singleElement = { ...element };
      features = [...features, singleElement];
    });
    this.setState(() => {
      return { features };
    });
  };

  setContacts = () => {
    let contacts = [];
    contact.forEach(element => {
      const singleElement = { ...element };
      contacts = [...contacts, singleElement];
    });
    this.setState(() => {
      return { contacts };
    });
  };

  setFooter = () => {
    let footers = [];
    footer.forEach(element => {
      const singleElement = { ...element };
      footers = [...footers, singleElement];
    });

    this.setState(() => {
      return { footers };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
