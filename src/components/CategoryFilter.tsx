
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        onClick={() => onCategoryChange("all")}
        className={`whitespace-nowrap ${
          selectedCategory === "all" 
            ? "gradient-acai text-white" 
            : "border-purple-200 hover:bg-purple-50"
        }`}
      >
        Todos
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`whitespace-nowrap capitalize ${
            selectedCategory === category 
              ? "gradient-acai text-white" 
              : "border-purple-200 hover:bg-purple-50"
          }`}
        >
          {category === "acai" ? "Açaí" : 
           category === "bebida" ? "Bebidas" :
           category === "fitness" ? "Fitness" :
           category === "diet" ? "Diet" : category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
