import { Input } from "@/components/ui/input"
const InputField = ({ item, handleInputChange,value }) => {
  return (
     
        <Input
          type={item.fieldType}
          name={item.name}
          id={item.name}
          defaultValue={value}
          onChange={(e) => handleInputChange(item.name, e.target.value)}
          className="border rounded p-2 w-full"
          placeholder={item.label}
        />
  )
}

export default InputField