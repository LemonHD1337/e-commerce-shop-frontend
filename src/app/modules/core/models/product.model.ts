import { Image } from './image.model';

enum Category {
  T_SHIRT,
  SHORT,
  SHIRT,
  HOODIE,
  JEANS
}

enum Size {
  XX_SMALL,
  X_SMALL,
  SMALL,
  MEDIUM,
  LARGE,
  X_LARGE,
  XX_LARGE
}

enum Color {
  GREEN,
  LIGHT_GREEN,
  RED,
  YELLOW,
  BROWN,
  LIGHT_BLUE,
  BLUE,
  PURPLE,
  PINK,
  WHITE,
  BLACK
}

enum DressStyle {
  CASUAL,
  FORMAL,
  PARTY,
  GYM
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: Category;
  size: Size;
  color: Color;
  dressStyle: DressStyle;
  quantitySold: number;
  images: Image[];
}
