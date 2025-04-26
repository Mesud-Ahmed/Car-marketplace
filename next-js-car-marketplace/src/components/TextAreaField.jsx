import { Textarea } from "./ui/textarea"
const TextAreaField =  ({ item, handleInputChange,value })  => {
  return (
    (
      <Textarea
        name={item.name}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
        className="border rounded p-2 w-full"
        placeholder={item.label}
        defaultValue={value}
        rows={4}
      />
    )
)
}

export default TextAreaField