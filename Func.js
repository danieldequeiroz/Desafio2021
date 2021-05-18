const toUpperFirst = Func => {
  return Func[0].toUpperCase() +
          Func.slice(1)
}

export default toUpperFirst
