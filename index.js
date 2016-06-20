function getSuggestLang(suggests) {
  const suggestLangArr = suggests.map( item = { return {langSrcId item.langSrcId, langDstId item.langDstId}; } );
  const langPercentegArr = !!suggestLangArr.length && suggestLangArr.reduce((prev, cur, i, arr) = getLangPercentage(prev, cur, i, arr), []);

  function getLangPercentage(prev, cur, i, arr) {
    const filteredArr = arr.filter(item = item.langSrcId === cur.langSrcId && item.langDstId === cur.langDstId);
    const percentage = (filteredArr.length * 100) / arr.length;
    const percentageObj = {
      ...cur,
      percentage
    };

    if (!prev.length) {
      prev.push(percentageObj);
    }

    if (prev.length === prev.filter( item = item.lang !== cur).length) {
      if (prev[0].percentage  percentage) {
        prev[0] = percentageObj;
      }
    }

    return prev;
  }

  return langPercentegArr[0];
}