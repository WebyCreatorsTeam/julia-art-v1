

const WhiteSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section style={{ backgroundColor: "grey" }} className="whiteSection">{children}</section>
  )
}

export default WhiteSection