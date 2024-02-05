import { sortData, filterData, computeStats } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

describe("sortData", () => {
  it("should sort data in ascending order", () => {
    const sortedData = sortData(fakeData, "name", "asc");
    expect(sortedData).toEqual(
      fakeData.sort((a, b) => a.name.localeCompare(b.name))
    );
  });
  it("should sort data in descending order", () => {
    const sortedData = sortData(fakeData, "name", "desc");
    expect(sortedData).toEqual(
      fakeData.sort((a, b) => b.name.localeCompare(a.name))
    );
  });
});

describe("filterData", () => {
  it("should filter", () => {
    const filteredData = filterData(fakeData, "artMovement", "Cubismo");
    expect((filteredData)).toEqual([
      {
        id: "Desnudo-y-Naturaleza-Muerta",
        name: "Desnudo y Naturaleza Muerta",
        shortDescription:
          "Fusiona la figura humana y elementos inanimados, explorando la complejidad de la forma y la representación.",
        description:
          "Es una obra magistral que destaca por la fusión única de la figura humana y elementos inanimados. La complejidad de la forma se revela a través de la armoniosa interacción entre el desnudo y los objetos presentes en la naturaleza muerta. La obra muestra la genialidad de Picasso al representar la dualidad de la vida y la muerte, la belleza y la decadencia. A través de su distintivo estilo cubista, el artista desafía las convenciones artísticas, creando una composición visualmente impactante que invita a la reflexión sobre la naturaleza efímera de la existencia humana.",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/Kav02/DEV013-dataverse/src/Imagenes/Desnudo-y-naturaleza-muerta.jpg",
        facts: {
          artistName: "Pablo Picasso",
          creationYear: 1931,
          artMovement: "Cubismo",
        },
        additionalInformation: {
          style: "Modernismo",
          technique: "Óleo sobre lienzo",
        },}]);
  });
});
describe("computeStats", () => {
  it("should return the % of each movement", () => {
    const computedStats = computeStats(fakeData);
    expect(computedStats).toEqual({Cubismo: 25, Surrealismo: 75}
    );
  });
});