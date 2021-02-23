const projects = {
  1613920701987: {
    name: "coding",
    path: "/Users/pankajl/coding",
    lastModifiedAt: 1613920701987,
    _id: "1613920701987",
  },
  1613920701988: {
    name: "dailyneed",
    path: "/Users/pankajl/coding/dailyneed",
    lastModifiedAt: 1613920701988,
    _id: "1613920701988",
  },
};

const getDBSnapshot = () => {
  return {
    projects,
    settings: {},
  };
};

module.exports = {
  getDBSnapshot,
};
