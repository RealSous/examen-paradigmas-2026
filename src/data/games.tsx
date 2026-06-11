import { Gamepad2, SportShoeIcon, Car, Mountain, Sword, Book } from "lucide-react";

export const MOCK_GAMES = [
  {
    id: 1,
    title: "EA FC26",
    genre: "Deportes",
    price: 69.99,
    available: true,
    icon: <SportShoeIcon size={24} />,
  },
  {
    id: 2,
    title: "Deus Ex: Mankind Divided",
    genre: "RPG",
    price: 59.99,
    available: true,
    icon: <Gamepad2 size={24} />,
  },
  {
    id: 3,
    title: "Detroit: Become Human",
    genre: "Narrativa",
    price: 49.99,
    available: false,
    icon: <Book size={24} />,
  },
  {
    id: 4,
    title: "Escape From Tarkov",
    genre: "Extraccion",
    price: 59.99,
    available: true,
    icon: <Mountain size={24} />,
  },
  {
    id: 5,
    title: "Forza Horizon 5",
    genre: "Carreras",
    price: 39.99,
    available: true,
    icon: <Car size={24} />,
  },
  {
    id: 6,
    title: "God of War Ragnarok",
    genre: "Accion",
    price: 69.99,
    available: false,
    icon: <Sword size={24} />,
  },
];
