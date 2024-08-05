// src/DocumentsPage.js
import React from 'react';
import './DocumentsPage.css';
import Header from './Header';
import Footer from './Footer';

const DocumentsPage = () => {
  return (
    <div className="documents-page">
      <Header />
      <div className="documents-container">
        <div className="document-box">
          <a href="http://batumi-gimnazia.edu.ge/wp-content/uploads/2020/05/პედაგოგთა-საბჭოს-დებლება.pdf">პედაგოგთა საბჭოს დებლება</a>
        </div>
        <div className="document-box">
          <a href="http://batumi-gimnazia.edu.ge/wp-content/uploads/2020/05/ბიბლიოთეკის-დებულება.pdf">ბიბლიოთეკის დებულება</a>
        </div>
        <div className="document-box">
          <a href="http://batumi-gimnazia.edu.ge/wp-content/uploads/2020/05/საგანგებო-სიტუაციებისას-რეაგირების-მართვა-4.pdf">საგანგებო სიტუაციებისას რეაგირების მართვა</a>
        </div>
        <div className="document-box">
          <a href="http://batumi-gimnazia.edu.ge/wp-content/uploads/2020/05/შინაგანაწესი-1.pdf">შინაგანაწესი</a>
        </div>
        <div className="document-box">
          <a href="http://batumi-gimnazia.edu.ge/wp-content/uploads/2020/06/სამსახურეობრივი-ინსტრუქციები.pdf">სამსახურებრივი ინსტრუქციები</a>
        </div>
        <div className="document-box">
          <a href="http://batumi-gimnazia.edu.ge/wp-content/uploads/2020/06/შიდა-მარეგულირებელი-დოკუმენტები-1-18-22.pdf">წესდება</a>
        </div>
        <div className="document-box">
          <a href="http://batumi-gimnazia.edu.ge/wp-content/uploads/2020/06/დისციპლინური-დებულება.pdf">დისციპლინური საბჭოს დებულება</a>
        </div>
        <div className="document-box">
          <a href="http://batumi-gimnazia.edu.ge/wp-content/uploads/2020/06/ააიპ-ბათუმის-წმინდა-ანდრია-პირველწოდებულის-სახელობის-სკოლის-მშობელთა-კომიტეტის-დებულება.pdf">ააიპ ბათუმის წმინდა ანდრია პირველწოდებულის სახელობის სკოლის მშობელთა კომიტეტის დებულება</a>
        </div>
        <div className="document-box">
          <a href="http://batumi-gimnazia.edu.ge/wp-content/uploads/2024/07/სკოლის-უსაფრთხოების-დოკუმენტი.pdf">ა(ა)იპ ბათუმის წმინდა ანდრია პირველწოდებულის სახელობის სკოლაში უსაფრთხოების წესები და პირობები</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DocumentsPage;
