import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  const DropdownField = ({ item, handleInputChange,value }) => {
    return (
      <Select
        onValueChange={(value) => handleInputChange(item.name, value)}
        name={item.name}
        defaultValue={value}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={value == ""?`Select ${item.label}`:value} />
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