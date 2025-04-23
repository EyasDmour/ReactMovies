import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export function MovieProvider({ children }) {
  // Load favorites from localStorage when component mounts
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('movieFavorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(favorites));
  }, [favorites]);

  function isFavorite(movieId) {
    return favorites.some(movie => movie.id === movieId);
  }

  function addToFavorites(movie) {
    setFavorites(prevFavorites => [...prevFavorites, movie]);
  }

  function removeFromFavorites(movieId) {
    setFavorites(prevFavorites => 
      prevFavorites.filter(movie => movie.id !== movieId)
    );
  }

  function clearFavorites() {
    setFavorites([]);
  }


  return (
    <MovieContext.Provider value={{ favorites, isFavorite, addToFavorites, removeFromFavorites, clearFavorites}}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}