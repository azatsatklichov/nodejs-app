import { Category } from './3-enums';

interface Duck {
  walk: () => void;
  swim: () => void;
  quack: () => void;
}

let probablyADuck = {
  walk: () => console.log("walking like a duck"),
  swim: () => console.log("swimming like a duck"),
  quack: () => console.log("quacking like a duck"),
};

function FlyOverWater(bird: Duck) {}
FlyOverWater(probablyADuck); // works!!!

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: DamageLogger;
}
