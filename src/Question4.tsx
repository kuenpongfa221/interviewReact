function ConditionalRendering({ isLoggedIn }: any) {
  // 實作你的條件渲染
  return isLoggedIn ? <h1>True !</h1> : <h1>False @@</h1>;
}

export default ConditionalRendering;
