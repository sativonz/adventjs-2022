function decorateTree(base) {
    const dict = {
      "PP": "P",
      "BB": "B",
      "RR": "R",
      "BP": "R",
      "PB": "R",
      "BR": "P",
      "RB": "P",
      "PR": "B",
      "RP": "B"
    }
  
    base = base.split(" ")
    let result = [base]
    let current = base
    while (current.length > 1) {
      let newRow = []
      for (let i = 0; i < current.length - 1; i++) {
        let pair = current.slice(i, i + 2).join("")
        newRow.push(dict[pair])
      }
      result.push(newRow)
      current = newRow
    }
    return result.map(x => x.join(" ")).reverse()
  }