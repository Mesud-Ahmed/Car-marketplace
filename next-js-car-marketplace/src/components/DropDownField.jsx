import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  const DropdownField = ({ item, handleInputChange }) => {
    return (
      <Select
        onValueChange={(value) => handleInputChange(item.name, value)}
        name={item.name}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`Select ${item.label}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{item.label}</SelectLabel>
            {item.options.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  };
  
  export default DropdownField;