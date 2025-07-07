
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-3 mb-8 scrollbar-hide">
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        onClick={() => onCategoryChange("all")}
        className={`whitespace-nowrap font-semibold shadow-md transition-all ${
          selectedCategory === "all" 
            ? "gradient-acai text-white hover:opacity-90 shadow-lg" 
            : "border-acai-300 text-acai-700 hover:bg-gradient-acai-light hover:border-acai-400"
        }`}
      >
        Todos os Açaís
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`whitespace-nowrap capitalize font-semibold shadow-md transition-all ${
            selectedCategory === category 
              ? "gradient-acai text-white hover:opacity-90 shadow-lg" 
              : "border-acai-300 text-acai-700 hover:bg-gradient-acai-light hover:border-acai-400"
          }`}
        >
          {category === "acai" ? "Açaí Tradicional" : 
           category === "bebida" ? "Bebidas" :
           category === "fitness" ? "Fitness" :
           category === "diet" ? "Diet" : category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
