import { Input } from "@/components/ui/input"
const InputField = ({ item, handleInputChange }) => {
  return (
     
        <Input
          type={item.fieldType}
          name={item.name}
          onChange={(e) => handleInputChange(item.name, e.target.value)}
          className="border rounded p-2 w-full"
          placeholder={item.label}
        />
  )
}

export default InputField