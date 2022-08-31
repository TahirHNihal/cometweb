const express = require("express");
const path = require("path");
const { readFileSync } = require("fs");

//Home Page
const homePage = (req, res) => {
  const slider = readFileSync(path.join(__dirname, "../db/homeSlider.json"));
  const testimonials = readFileSync(
    path.join(__dirname, "../db/testimonial.json")
  );
  const blogs = readFileSync(path.join(__dirname, "../db/blogs.json"));
  const clients = readFileSync(path.join(__dirname, "../db/clients.json"));
  res.render("index-2", {
    slider: JSON.parse(slider.toString()),
    testimonials: JSON.parse(testimonials.toString()),
    blogs: JSON.parse(blogs.toString()),
    clients: JSON.parse(clients.toString()),
  });
};

//About Page
const aboutPage = (req, res) => {
  res.render("page-about");
};

//Shop Page
const shopPage = (req, res) => {
  const product = readFileSync(path.join(__dirname, "../db/product.json"));
  res.render("shop-3col", {
    product: JSON.parse(product.toString()),
  });
};

//Single Product Page
const singleProductPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/shop-single.html"));
};

//Contact Page
const ContactPage = (req, res) => {
  res.render("page-contact");
};

//Exports Controllers
module.exports = {
  homePage,
  aboutPage,
  shopPage,
  singleProductPage,
  ContactPage,
};
