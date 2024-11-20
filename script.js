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
     *  Modifying existing glyphs by replacing the group
     */
    const updatedGlyphGroups = window.peGlyphs.groups.map(group => {
        if (group.groupName === 'Stars') {
            return {
                ...group,
                glyphs: group.glyphs.map(glyph => 
                    glyph.name === '✯' ? { ...glyph, unicode: 'newUnicodeHere' } : glyph
                ),
            };
        }
        return group;
    });
    window.peGlyphs.groups = updatedGlyphGroups;

    /**
     * Modifying existing whitespaces unicode by replacing the group
     */
    const updatedWhiteSpaceGroups = window.peWhiteSpaces.groups.map(group => {
        if (group.groupId === '2') {
            return {
                ...group,
                whiteSpaces: group.whiteSpaces.map(whiteSpace => 
                    whiteSpace.name === 'My custom space 1' ? { ...whiteSpace, unicode: 'newUnicodeHere' } : whiteSpace
                ),
            };
        }
        return group;
    });
    window.peWhiteSpaces.groups = updatedWhiteSpaceGroups;

    /**
     * Modifying existing whitespaces shortcuts by replacing the group
     */
    const updatedShortcutGroups = window.peWhiteSpaces.groups.map(group => {
        if (group.groupId === '2') {
            return {
                ...group,
                whiteSpaces: group.whiteSpaces.map(whiteSpace => 
                    whiteSpace.name === 'LBL_NO_BREAK_SPACE' ? { ...whiteSpace, shortcut: 'alt+mod+T' } : whiteSpace
                ),
            };
        }
        return group;
    });
    window.peWhiteSpaces.groups = updatedShortcutGroups;

})();
