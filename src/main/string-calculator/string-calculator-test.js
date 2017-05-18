import "should";
import sc from "./string-calculator.js";

describe("String calculator", () => {
  it("puede sumar una cadena vacía", () => {
    sc("").should.eql(0);
  });

  it("puede sumar cadenas con números", () => {
    sc("1").should.eql(1);
    sc("2").should.eql(2);
    sc("1,2").should.eql(3);
    sc("10,2").should.eql(12);
    sc("1,2,3").should.eql(6);
  });

  it("se puede usar \\n para separar los números", () => {
    sc("1\n2\n3").should.eql(6);
  });

  it("se puede definir un separador personalizado", () => {
    sc("//;\n1;2;3").should.eql(6);
  });

  it("falla con números negativos y en la traza aparecen los números no admitidos", () => {
    (() => sc("-1,2")).should.throw(/-1/);
  });

  it("solo suma números menores que 1000", () => {
    sc("1000,2").should.eql(2);
  });

  it("se puede definir un separador personalizado de más de un char de longitud", () => {
    sc("//[***]\n1***2***3").should.eql(6);
  });

  it("se puede definir varios separadores personalizados", () => {
    sc("//[%][*]\n1%2*3").should.eql(6);
  })
});
