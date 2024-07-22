

const Hider = () => {
  return (
    <header
      style={{
        padding: "1rem",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Ekleme: Boşluğu dağıtmak için
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <Image src="/test.jpg" alt="logo" width={50} height={50} /> */}
        <nav style={{ marginLeft: "10px" }}>
          <ul style={{ display: "flex", gap: "1rem" }}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">products</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav>
        <ul style={{ display: "flex", gap: "1rem" }}>
          <li>
            <a href="/account">MyPage</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Hider;
