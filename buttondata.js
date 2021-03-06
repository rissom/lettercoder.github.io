
var rockets = [
               { code: '0E31', angle: 0,  btn: true, name: 'THAI CHARACTER MAI HAN-AKAT', group: 'thai' },
               { code: '0E34', angle: 0,  btn: true, name: 'THAI CHARACTER SARA I', group: 'thai' },
               { code: '0E35', angle: 0,  btn: true, name: 'THAI CHARACTER SARA II', group: 'thai' },
               { code: '0E36', angle: 0,  btn: true, name: 'THAI CHARACTER SARA UE', group: 'thai' },
               { code: '0E37', angle: 0,  btn: true, name: 'THAI CHARACTER SARA UEE', group: 'thai' },
               { code: '0E38', angle: 0,  btn: true, name: 'THAI CHARACTER SARA U', group: 'thai' },
               { code: '0E39', angle: 0,  btn: true, name: 'THAI CHARACTER SARA UU', group: 'thai' },
               { code: '0E3A', angle: 0,  btn: true, name: 'THAI CHARACTER PHINTHU', group: 'thai' },
               { code: '0E47', angle: 350,  btn: true, name: 'THAI CHARACTER MAITAIKHU', group: 'thai' },
               { code: '0E48', angle: 0,  btn: true, name: 'THAI CHARACTER MAI EK', group: 'thai' },
               { code: '0E49', angle: 10,  btn: true, name: 'THAI CHARACTER MAI THO', group: 'thai' },
               { code: '0E4A', angle: 0,  btn: true, name: 'THAI CHARACTER MAI TRI', group: 'thai' },
               { code: '0E4B', angle: 0,  btn: true, name: 'THAI CHARACTER MAI CHATTAWA', group: 'thai' },
               { code: '0E4C', angle: 0,  btn: true, name: 'THAI CHARACTER THANTHAKHAT', group: 'thai' },
               { code: '0E4D', angle: 0,  btn: true, name: 'THAI CHARACTER NIKHAHIT', group: 'thai' },
               { code: '0E4E', angle: 350,  btn: true, name: 'THAI CHARACTER YAMAKKAN', group: 'thai' },
               
               { code: '030A', btn: true, name: 'COMBINING RING ABOVE', group: 'combinig' },
               { code: '030F', btn: true, name: 'COMBINING DOUBLE GRAVE ACCENT', group: 'combinig' },
               { code: '030B', btn: true, name: 'COMBINING DOUBLE ACUTE ACCENT', group: 'combinig' },       
               { code: '033F', angle: 0, btn: true, name: 'COMBINING DOUBLE OVERLINE', group: 'combinig' },
               { code: '0352', angle: 0, btn: true, name: 'COMBINING FERMATA', group: 'combinig' },
               { code: '0331', angle: 0, btn: true, name: 'COMBINING MACRON BELOW', group: 'combinig' },
               { code: '0311', angle: 0, btn: true, name: 'COMBINING INVERTED BREVE', group: 'combinig' },
               { code: '0333', angle: 0, btn: true, name: 'COMBINING DOUBLE LOW LINE', group: 'combinig' },
               { code: '0312', angle: 0, btn: true, name: 'COMBINING TURNED COMMA ABOVE', group: 'combinig' },
               { code: '0337', angle: 0, btn: true, name: 'COMBINING SHORT SOLIDUS OVERLAY', group: 'combinig' },
               { code: '0360', angle: 0, btn: true, name: 'COMBINING DOUBLE TILDE', group: 'combinig' },
               { code: '20EB', angle: 0, btn: true, name: 'COMBINING LONG DOUBLE SOLIDUS OVERLAY', group: 'combinig' },
               { code: '20DC', angle: 0, btn: true, name: 'COMBINING FOUR DOTS ABOVE', group: 'combinig' },
               { code: '0338', angle: 0, btn: true, name: 'COMBINING LONG SOLIDUS OVERLAY', group: 'combinig' },
               { code: '0321', angle: 0, btn: true, name: 'COMBINING PALATALIZED HOOK BELOW', group: 'combinig' },
               { code: '0349', angle: 0, btn: true, name: 'COMBINING LEFT ANGLE BELOW', group: 'combinig' },

               { code: '0363', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER A', group: 'smallletter' },
               { code: '0368', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER C', group: 'smallletter' },
               { code: '0369', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER D', group: 'smallletter' },
               { code: '0364', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER E', group: 'smallletter' },
               { code: '036A', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER H', group: 'smallletter' },
               { code: '0365', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER I', group: 'smallletter' },
               { code: '036B', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER M', group: 'smallletter' },
               { code: '0366', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER O', group: 'smallletter' },
               { code: '036C', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER R', group: 'smallletter' },
               { code: '036D', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER T', group: 'smallletter' },
               { code: '0367', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER U', group: 'smallletter' },
               { code: '036E', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER V', group: 'smallletter' },
               { code: '036F', angle: 0, btn: true, name: 'COMBINING LATIN SMALL LETTER X', group: 'smallletter' },

               { code: '1D43', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL A', group: 'modifierletter' },
               { code: '1D47', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL B', group: 'modifierletter' },
               { code: '1D9C', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL C', group: 'modifierletter' },
               { code: '1D48', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL D', group: 'modifierletter' },
               { code: '1D49', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL E', group: 'modifierletter' },
               { code: '1DA0', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL F', group: 'modifierletter' },
               { code: '1D4D', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL G', group: 'modifierletter' },
               { code: '02B0', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL H', group: 'modifierletter' },
               { code: '02B2', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL J', group: 'modifierletter' },
               { code: '1D4F', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL K', group: 'modifierletter' },
               { code: '02E1', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL L', group: 'modifierletter' },
               { code: '1D50', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL M', group: 'modifierletter' },
               { code: '207F', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL N', group: 'modifierletter' },
               { code: '1D52', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL O', group: 'modifierletter' },
               { code: '1D56', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL P', group: 'modifierletter' },
               { code: '02B3', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL R', group: 'modifierletter' },
               { code: '02E2', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL S', group: 'modifierletter' },
               { code: '1D57', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL T', group: 'modifierletter' },
               { code: '1D58', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL U', group: 'modifierletter' },
               { code: '1D5B', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL V', group: 'modifierletter' },
               { code: '02B7', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL W', group: 'modifierletter' },
               { code: '02E3', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL X', group: 'modifierletter' },
               { code: '02B8', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL Y', group: 'modifierletter' },
               { code: '1DBB', angle: 0, btn: true, name: 'MODIFIER LETTER SMALL Z', group: 'modifierletter' },

               { code: '25EF', angle: 0, btn: true, name: 'LARGE CIRCLE', group: 'geo' },
               { code: '25B3', angle: 0, btn: true, name: 'WHITE UP-POINTING TRIANGLE', group: 'geo' },

               { code: 'FC60', angle: 355, btn: true, name: 'ARABIC LIGATURE SHADDA WITH FATHA ISOLATED FORM', group: 'arabic' }

];

