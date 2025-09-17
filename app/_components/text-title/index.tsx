type TextTitleProps = {
  text: string
  title: string
}

export const TextTitle = ({ text, title }: TextTitleProps) => (
  <div className="flex flex-col gap-6 font-medium">
    <h3 className="!cursor-pointer">{title}</h3>
    <span className="text-[13px]">{text}</span>
  </div>
)
