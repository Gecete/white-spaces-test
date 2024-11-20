(function() {

    /**
     * Add a new group to the top of print editor glyps panel 
    */
    const newGlyphGroup = {
        groupName: 'Stars',
        glyphs: [            
            {
                name: '★',
                unicode: 'U+2605',
            },
            {
                name: '✰',
                unicode: 'U+2730',
            },
            {
                name: '✵',
                unicode: 'U+2735',
            },
            {
                name: '✯',
                unicode: 'U+272F',
            }
        ],
    };
    window.peGlyphs.groups = [newGlyphGroup, ...window.peGlyphs.groups];

    /**
     * Add a new group to the bottom of print editor whitespaces panel 
    */
    const newWhiteSpaceGroup = {
        groupId: '5',
        whiteSpaces: [
            { name: 'My custom space 1', unicode: 'U+0009' },
            { name: 'My custom space 2', unicode: 'U+0009' },
        ],
    };
    window.peWhiteSpaces.groups = [...window.peWhiteSpaces.groups, newWhiteSpaceGroup];

    /**
     * Modifying existing glyphs by directly finding and modifying
     */
    const starsGroup = window.peGlyphs.groups.find(group => group.groupName === 'Stars');
    if (starsGroup) {
        const targetGlyph = starsGroup.glyphs.find(glyph => glyph.name === '✯');
        if (targetGlyph) {
            targetGlyph.unicode = 'newUnicodeHere';
        }
    }

    /**
     * Modifying existing whitespaces unicode by directly finding and modifying
     */
    const groupWithId2 = window.peWhiteSpaces.groups.find(group => group.groupId === '2');
    if (groupWithId2) {
        const targetWhiteSpace = groupWithId2.whiteSpaces.find(whiteSpace => whiteSpace.name === 'My custom space 1');
        if (targetWhiteSpace) {
            targetWhiteSpace.unicode = 'newUnicodeHere';
        }
    }

    /**
     * Modifying existing whitespaces shortcuts by directly finding and modifying
     */
    if (groupWithId2) {
        const targetShortcut = groupWithId2.whiteSpaces.find(whiteSpace => whiteSpace.name === 'LBL_NO_BREAK_SPACE');
        if (targetShortcut) {
            targetShortcut.shortcut = 'alt+mod+T';
        }
    }

})();
