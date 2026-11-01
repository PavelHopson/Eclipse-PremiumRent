import React, { useRef } from "react";
import { useStore } from "./store";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SearchForm } from "./components/SearchForm";
import { BookingWizard } from "./components/BookingWizard";
import { CarCarousel } from "./components/CarCarousel";
import { InfoSection } from "./components/InfoSection";
import { ClientsSection } from "./components/ClientsSection";
import { CAR_CLASSES, CarClass } from "./types";

const App: React.FC = () => {
  const { booking, setBooking, goToStep } = useStore();
  const fleetRef = useRef<HTMLDivElement>(null);
  const scrollToFleet = () => {
    if (booking.step !== 1) {
      goToStep(1);
      setTimeout(
        () => fleetRef.current?.scrollIntoView({ behavior: "smooth" }),
        100,
      );
    } else fleetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleCategorySelect = (category: CarClass) =>
    document
      .getElementById(`category-${category}`)
      ?.scrollIntoView({ behavior: "smooth" });
  const handleCarSelect = (id: string) => {
    setBooking({ selectedCarId: id, step: 3 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-dark">
      <a href="#main" className="rent-skip">
        К содержанию
      </a>
      <Navbar onCatalogClick={scrollToFleet} />
      <main id="main">
        {booking.step === 1 ? (
          <>
            <Hero onActionClick={scrollToFleet} onCategorySelect={handleCategorySelect} />
            <SearchForm />
            <div ref={fleetRef} id="fleet" className="rent-fleet">
              <div className="rent-container rent-fleet-intro">
                <p className="rent-eyebrow">АВТОПАРК / 02</p>
                <h2>Выберите свой автомобиль.</h2>
                <p>Пример каталога и стоимости. Наличие не проверяется.</p>
              </div>
              {CAR_CLASSES.map((category) => (
                <div key={category} id={`category-${category}`}>
                  <CarCarousel
                    category={category}
                    onSelectCar={handleCarSelect}
                  />
                </div>
              ))}
            </div>
            <ClientsSection />
            <InfoSection />
          </>
        ) : (
          <BookingWizard />
        )}
      </main>
      <footer className="rent-footer">
        <div className="rent-container rent-footer-inner">
          <div>
            <strong>ECLIPSE</strong>
            <span>PREMIUM RENT</span>
          </div>
          <p>
            Демонстрационный проект для портфолио.
            <br />
            Заявки и оплата не подключены.
          </p>
          <a href="#main">Наверх ↑</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
