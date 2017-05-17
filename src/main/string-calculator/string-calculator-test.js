import sc from './string-calculator';

// https://bitbucket.org/buntplanet/curso-fp-tdd-javascript

describe('String Calculator', () => {
  it('suma cadenas vacías', () => {
    const result = sc('');
    result.should.equal(0);
  });

  it('suma un sólo número', () => {
    const oneNumber = Math.floor(Math.random() * 100);

    sc(`${oneNumber}`).should.equal(oneNumber);
  });

  it('suma dos números', () => {
    sc('1,4').should.equal(5);
    sc('10,4').should.equal(14);
  });

  it('suma n números', () => {
    sc('1,3,4').should.equal(8);
    sc('1,3,4,6').should.equal(14);
  });

  it('se pueden separar con \n', () => {
    sc("1\n2\n3").should.equal(6);
  });

});
