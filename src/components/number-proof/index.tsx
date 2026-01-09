type NumberProofProps = {
  number: number
  text: string
}

export const NumberProof = ({ number, text }: NumberProofProps) => (
  <div className="flex gap-2.5">
    <span className="!text-red text-[13px]">{number}+</span>
    <p>{text}</p>
  </div>
)
