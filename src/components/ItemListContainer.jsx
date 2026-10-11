import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "../data";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function ItemListContainer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(
    () => PRODUCTS.filter((product) => {
      const productText = `${product.name} ${product.category} ${product.description} ${(product.materials || []).join(' ')}`.toLowerCase();
      const matchesQuery = !query.trim() || productText.includes(query.toLowerCase().trim());
      const matchesCategory =
        category === "all" ||
        product.category === category ||
        (category === "Algarrobo" && productText.includes("algarrobo")) ||
        (category === "Criollos" && product.name.toLowerCase().includes("criollo"));
      return matchesQuery && matchesCategory;
    }),
    [query, category],
  );
  const clearFilters = () => {
    setQuery("");
    setCategory("all");
  };

  return (
    <section
      className="catalog-section container"
      id="catalogo"
      aria-labelledby="catalogo-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Elegí tu próximo compañero</p>
          <h2 id="catalogo-title">
            Catálogo <em>matero</em>
          </h2>
        </div>
        <p className="section-note">
          Una selección pensada para disfrutar el ritual de todos los días.
        </p>
      </div>
      <div className="catalog-tools">
        <label className="search-field">
          <span className="sr-only">Buscar productos</span>
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Buscar por nombre..."
            autoComplete="off"
          />
        </label>
        <label className="sort-field">
          <span className="sr-only">Filtrar por categoría</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="all">Todas las categorías</option>
            {CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="category-pills" aria-label="Filtros rápidos">
        <button
          className={`pill ${category === "all" ? "active" : ""}`}
          onClick={() => setCategory("all")}
        >
          Todas
        </button>
        {CATEGORIES.map((item) => (
          <button
            className={`pill ${category === item ? "active" : ""}`}
            key={item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="results-count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "producto" : "productos"}
      </p>
      {filtered.length ? (
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={setSelected}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-icon">⌕</span>
          <h3>No encontramos ese producto</h3>
          <p>Probá con otro nombre o seleccioná “Todas las categorías”.</p>
          <button className="text-button" onClick={clearFilters}>
            Limpiar búsqueda
          </button>
        </div>
      )}
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
