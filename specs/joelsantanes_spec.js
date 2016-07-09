var joelsantanate = require('../joelsantanes.js').joelsantanate;

describe('Joelsantanator', function() {
  var p = function(original, translation) {
    it('converts "' + original + '" into "' + translation + '"', function() {
      expect(joelsantanate(original)).toBe(translation);
    });
  };

  p(undefined, undefined);
  p('', '');
  p('arábia saudita jogou bem', 'saudi arábia prei véri gúdi');
  p('melhor oportunidade para gol', 'bexti oportuniti di ixcoar');
  p('e meu troco?', 'ândi mái chânger?');
  p('para esquerda para direita pro meio de atrás', 'di lefiti di raiti di midiu frlom blihaindiu');
  p('melhor que guaraná com rolha', 'bexti qui guaraná uíf rolha');
  p('eu gosto de churrasco com feijão', 'ái láiqui frlom bárbiquiu uíf feijión');
  p('minha esposa não gosta de viajar para o exterior', 'mái esposa nãdi láiqui frlom tráviliu di di extrandjeir');
  p('meu inglês é muito bom', 'mái inglês ix véri véri gúdi');
  p('meu time joga muito bem', 'mái equipi pleier véri véri gúdi');
  p('meu time controlou o primeiro tempo da partida', 'mái equipi contrôu di faristi táimi of mét');
  p('todos os direitos reservados', 'áu di raiti reservados');
});
