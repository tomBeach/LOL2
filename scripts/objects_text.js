


// ======= ======= ======= TEXT OBJECTS ======= ======= =======
// ======= ======= ======= TEXT OBJECTS ======= ======= =======
// ======= ======= ======= TEXT OBJECTS ======= ======= =======

function initTexts() { 
    console.log("initTexts");

    var textArray = [];

    t_intensity = new Text (
        /* textName:  */ 't_intensity',          // 
        /* pgTopic:  */ 'Intensity',          // 
        /* pgText:   */ 'Lorem ipsum dolor sit amet, sit quem fabulas recusabo eu, ea quod definiebas his. Ut justo repudiare pertinacia quo, eum libris meliore dignissim no. Sint inimicus assueverit vis te. Nam ei quando aliquam tibique, debet senserit voluptatum cu quo. Duo augue error vocibus cu. Ius docendi posidonium ei, cum mundi ponderum cu, postea philosophia ad est. His eu nihil ceteros noluisse, ad sea facilis omittantur. Tota iriure ex sit, eum erant assentior voluptaria ut, lucilius patrioque quo no. In vis quod vide noster. Autem mucius copiosae cu pri, aeque graece est ut.', 
        textArray
    );
    t_int_power = new Text (
        /* textName:  */ 't_int_power',          // 
        /* pgTopic:  */ 'Intensity: Wattage',          // 
        /* pgText:   */ 'Qui electram expetenda mel, pri id autem fierent deleniti, omnium suscipit ne his. Id nusqmunere postea detraxit te. At mel accusata perpetua, vim in ancillae detraxit. Ignota patrioque cu mea, accumsan argumentum omittantur vel no. Cu per natum forensibus percipitur, in doctus aeterno labitur qui, nonumy essent eu eam. Duo odio forensibus et.' , 
        textArray
    );
    t_int_distance = new Text (
        /* textName:  */ 't_int_distance',          // 
        /* pgTopic:  */ 'Intensity: Distance',          // 
        /* pgText:   */ 'Qui munere postea detraxit te. At mel accusata perpetua, vim in ancillae detraxit. Ignota patrioque cu mea, accumsan argumentum omittantur vel no. Cu per natum forensibus percipitur, in doctus aeterno labitur qui, nonumy essent eu eam. Duo odio forensibus et.' , 
        textArray
    );
    t_scrims = new Text (
        /* textName:  */ 't_scrims',          // 
        /* pgTopic:  */ 'Intensity: Scrims',          // 
        /* pgText:   */ 'Eum ne maiorum referrentur, et eos brute adolescens. Omnis soleat erroribus est in, eos eu diceret pertinax. Eu mei essent posidonium, in erant petentium cum. Mei id feugait interpretaris, usu vide assum audire id. Te usu eruditi dolores electram, diceret tibique in sit. Cum erat fugit oratio cu, eos ei wisi ullum. Eam ex tale dicam, diam persius suscipit an nam, ad mei erroribus maluisset. Ius ne dicant aeterno inciderint, vim ea case ullum. Vel accusata abhorreant et. Vis an officiis fabellas, mea eros vivendo adolescens ad.', 
        textArray
    );
    t_spotFlood = new Text (
        /* textName:  */ 't_spotFlood',          // 
        /* pgTopic:  */ 'Intensity: Spot/Flood',          // 
        /* pgText:   */ 'Lorem ipsum dolor sit amet, sit quem fabulas recusabo eu, ea quod definiebas his. Ut justo repudiare pertinacia quo, eum libris meliore dignissim no. Sint inimicus assueverit vis te. Nam ei quando aliquam tibique, debet senserit voluptatum cu quo. Duo augue error vocibus cu. Ius docendi posidonium ei, cum mundi ponderum cu, postea philosophia ad est. His eu nihil ceteros noluisse, ad sea facilis omittantur. Tota iriure ex sit, eum erant assentior voluptaria ut, lucilius patrioque quo no. In vis quod vide noster. Autem mucius copiosae cu pri, aeque graece est ut.', 
        textArray
    );
    t_quality = new Text (
        /* textName:  */ 't_quality',          // 
        /* pgTopic:  */ 'Quality',          // 
        /* pgText:   */ 'Lorem ipsum dolor sit amet, sit quem fabulas recusabo eu, ea quod definiebas his. Ut justo repudiare pertinacia quo, eum libris meliore dignissim no. Sint inimicus assueverit vis te. Nam ei quando aliquam tibique, debet senserit voluptatum cu quo. Duo augue error vocibus cu. Ius docendi posidonium ei, cum mundi ponderum cu, postea philosophia ad est. His eu nihil ceteros noluisse, ad sea facilis omittantur. Tota iriure ex sit, eum erant assentior voluptaria ut, lucilius patrioque quo no. In vis quod vide noster. Autem mucius copiosae cu pri, aeque graece est ut.', 
        textArray
    );
    t_qual_hardSoft = new Text (
        /* textName:  */ 't_qual_hardSoft',          // 
        /* pgTopic:  */ 'Hard/Soft',          // 
        /* pgText:   */ 'Qsit amet, sit quem fabulas recusabo eu, ea quod definiebas his. Ut justo repudiare pertinaci id autem fierent deleniti, omnium suscipit ne his. Id nusqmunere postea detraxit te. At mel accusata perpetua, vim in ancillae detraxit. Ignota patrioque cu mea, accumsan argumentum omittantur vel no. Cu per natum forensibus percipitur, in doctus aeterno labitur qui, nonumy essent eu eam. Duo odio forensibus et.' , 
        textArray
    );
    t_diffusion = new Text (
        /* textName:  */ 't_diffusion',          // 
        /* pgTopic:  */ 'Diffusion',          // 
        /* pgText:   */ 'Qsit amet, sit quem fabulas recusabo eu, ea quod definiebas his. Ut justo repudiare pertinaci id autem fierent deleniti, omnium suscipit ne his. Id nusqmunere postea detraxit te. At mel accusata perpetua, vim in ancillae detraxit. Ignota patrioque cu mea, accumsan argumentum omittantur vel no. Cu per natum forensibus percipitur, in doctus aeterno labitur qui, nonumy essent eu eam. Duo odio forensibus et.' , 
        textArray
    );
    t_qual_hard_near = new Text (
        /* textName:  */ 't_qual_hard_near',          // 
        /* pgTopic:  */ 'Hard Shadows (flag near source)',          // 
        /* pgText:   */ 'Sumo sonet feugait ex nec, ex wisi novum tantas eum. Amet consetetur id sea, facer harum menandri te vix. Ex luptatum accommodare interpretaris cum, in has ornatus indoctum explicari. Cibo praesent conceptam est in, copiosae accusamus ei nam. Eos equidem facilis cu, est iusto euismod erroribus in. Est ne eros clita iriure, cu has cibo impetus, menandri interpretaris duo an. Cum an esse ipsum feugait. Omnium detracto ius et. Ad impetus aliquam legendos has. Sed inermis nusquam ei, ne fastidii inciderint eum. Suas nonumy disputationi quo an. Prompta neglegentur suscipiantur sit ex, magna causae nam ei. Nam quando feugiat dignissim an, te per odio detraxit.', 
        textArray
    );
    t_qual_hard_far = new Text (
        /* textName:  */ 't_qual_hard_far',          // 
        /* pgTopic:  */ 'Hard Shadows (flag far from source)',          // 
        /* pgText:   */ 'No lorem electram expetenda mel, pri id autem fierent deleniti, omnium suscipit ne his. Id nusquam patrioque vis, has scripta philosophia an. Aliquid accusam definiebas ad duo. Quo option eruditi salutandi no, ei cum ridens essent. Ne duis commune vim.' , 
        textArray
    );
    t_qual_soft_near = new Text (
        /* textName:  */ 't_qual_soft_near',          // 
        /* pgTopic:  */ 'Soft Shadows (flag near source)',          // 
        /* pgText:   */ 'Sumo sonet feugait ex nec, ex wisi novum tantas eum. Amet consetetur id sea, facer harum menandri te vix. Ex luptatum accommodare interpretaris cum, in has ornatus indoctum explicari. Cibo praesent conceptam est in, copiosae accusamus ei nam. Eos equidem facilis cu, est iusto euismod erroribus in. Est ne eros clita iriure, cu has cibo impetus, menandri interpretaris duo an. Cum an esse ipsum feugait. Omnium detracto ius et. Ad impetus aliquam legendos has. Sed inermis nusquam ei, ne fastidii inciderint eum. Suas nonumy disputationi quo an. Prompta neglegentur suscipiantur sit ex, magna causae nam ei. Nam quando feugiat dignissim an, te per odio detraxit.', 
        textArray
    );
    t_qual_soft_far = new Text (
        /* textName:  */ 't_qual_soft_far',          // 
        /* pgTopic:  */ 'Soft Shadows (flag far from source)',          // 
        /* pgText:   */ 'No lorem electram expetenda mel, pri id autem fierent deleniti, omnium suscipit ne his. Id nusquam patrioque vis, has scripta philosophia an. Aliquid accusam definiebas ad duo. Quo option eruditi salutandi no, ei cum ridens essent. Ne duis commune vim.' , 
        textArray
    );
    t_position = new Text (
        /* textName:  */ 't_position',          // 
        /* pgTopic:  */ 'Position',          // 
        /* pgText:   */ 'Lorem ipsum dolor sit amet, sit quem fabulas recusabo eu, ea quod definiebas his. Ut justo repudiare pertinacia quo, eum libris meliore dignissim no. Sint inimicus assueverit vis te. Nam ei quando aliquam tibique, debet senserit voluptatum cu quo. Duo augue error vocibus cu. Ius docendi posidonium ei, cum mundi ponderum cu, postea philosophia ad est. His eu nihil ceteros noluisse, ad sea facilis omittantur. Tota iriure ex sit, eum erant assentior voluptaria ut, lucilius patrioque quo no. In vis quod vide noster. Autem mucius copiosae cu pri, aeque graece est ut.', 
        textArray
    );
    t_keyShadows = new Text (
        /* textName:  */ 't_keyShadows',          // 
        /* pgTopic:  */ 'Position: Keylight Shadows',          // 
        /* pgText:   */ 'No lorem electram expetenda mel, pri id autem fierent deleniti, omnium suscipit ne his. Id nusquam patrioque vis, has scripta philosophia an. Aliquid accusam definiebas ad duo. Quo option eruditi salutandi no, ei cum ridens essent. Ne duis commune vim.' , 
        textArray
    );
    t_backAngle = new Text (
        /* textName:  */ 't_backAngle',          // 
        /* pgTopic:  */ 'Position: Backlight Angle',          // 
        /* pgText:   */ 'No lorem electram expetenda mel, pri id autem fierent deleniti, omnium suscipit ne his. Id nusquam patrioque vis, has scripta philosophia an. Aliquid accusam definiebas ad duo. Quo option eruditi salutandi no, ei cum ridens essent. Ne duis commune vim.' , 
        textArray
    );
    t_threePoint = new Text (
        /* textName:  */ 't_threePoint',          // 
        /* pgTopic:  */ 'Three Point Lighting',          // 
        /* pgText:   */ 'Sumo sonet feugait ex nec, ex wisi novum tantas eum. Amet consetetur id sea, facer harum menandri te vix. Ex luptatum accommodare interpretaris cum, in has ornatus indoctum explicari. Cibo praesent conceptam est in, copiosae accusamus ei nam. Eos equidem facilis cu, est iusto euismod erroribus in. Est ne eros clita iriure, cu has cibo impetus, menandri interpretaris duo an. Cum an esse ipsum feugait. Omnium detracto ius et. Ad impetus aliquam legendos has. Sed inermis nusquam ei, ne fastidii inciderint eum. Suas nonumy disputationi quo an. Prompta neglegentur suscipiantur sit ex, magna causae nam ei. Nam quando feugiat dignissim an, te per odio detraxit.', 
        textArray
    );
    t_intro = new Text (
        /* textName:  */ 't_intro',          // 
        /* pgTopic:  */ 'Lighting on Location',          // 
        /* pgText:   */ 'Sumo sonet feugait ex nec, ex wisi novum tantas eum. Amet consetetur id sea, facer harum menandri te vix. Ex luptatum accommodare interpretaris cum, in has ornatus indoctum explicari. Cibo praesent conceptam est in, copiosae accusamus ei nam. Eos equidem facilis cu, est iusto euismod erroribus in. Est ne eros clita iriure, cu has cibo impetus, menandri interpretaris duo an. Cum an esse ipsum feugait. Omnium detracto ius et. Ad impetus aliquam legendos has. Sed inermis nusquam ei, ne fastidii inciderint eum. Suas nonumy disputationi quo an. Prompta neglegentur suscipiantur sit ex, magna causae nam ei. Nam quando feugiat dignissim an, te per odio detraxit.', 
        textArray
    );
return textArray;
}

// ======= ======= ======= TEXT constructor  ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= =======
// ======= ======= ======= TEXT constructor  ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= =======
// ======= ======= ======= TEXT constructor  ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= ======= =======

function Text (textName, pgTopic, pgText, textArray) {
    // console.log('Text');

    this.textName = textName;
    this.pgTopic = pgTopic;
    this.pgText = pgText;
    this.textArray = textArray;
    this.textArray.push(this);

}


    // t_14210 = new Text (
    //     /* textKey:  */ 't_14210',          // 
    //     /* textName: */ 'eyelight',          // 
    //     /* pgTopic:  */ 'sea Intro',          // 
    //     /* pgText:   */ 'At possim definitionem eum, usu ea iudicabit efficiendi, in nam eius labore. Sit iudico commodo salutandi in. Eos quod modo dicat ne, eum ut posse admodum tacimates. Te timeam intellegat sea, ex has justo deleniti epicurei. Vero primis luptatum ex mea. Ius scripta discere conceptam cu. No cum audiam electram. Qui id natum eirmod, scaevola dissentias eos in, nam partem graece ut. Est an diam democritum.' , 
    //     textArray
    // );
    // t_14220 = new Text (
    //     /* textKey:  */ 't_14220',          // 
    //     /* textName: */ 'sideLight',          // 
    //     /* pgTopic:  */ 'maiorum referrentur',          // 
    //     /* pgText:   */ 'Eum ne maiorum referrentur, et eos brute adolescens. Omnis soleat erroribus est in, eos eu diceret pertinax. Eu mei essent posidonium, in erant petentium cum. Mei id feugait interpretaris, usu vide assum audire id. Te usu eruditi dolores electram, diceret tibique in sit. vim ea case ullum. Vel accusata abhorreant et. Vis an officiis fabellas, mea eros vivendo adolescens ad.', 
    //     textArray
    // );
    // t_14230 = new Text (
    //     /* textKey:  */ 't_14230',          // 
    //     /* textName: */ 'kicker',          // 
    //     /* pgTopic:  */ 'fabellas',          // 
    //     /* pgText:   */ 'Eum ne maiorum referrentur, et eos brute adolescens. Omnis soleat erroribus est in, eos eu diceret pertinax. Eu mei essent posidonium, in erant petentium cum. Mei id feugait interpretaris, usu vide assum audire id. Te usu eruditi dolores electram, diceret tibique in sit. Cum erat fugit oratio cu, eos ei wisi ullum. Eam ex tale dicam, diam persius suscipit an nam, ad mei erroribus maluisset. Ius ne dicant aeterno inciderint, vim ea case ullum. Vel accusata abhorreant et. Vis an officiis fabellas, mea eros vivendo adolescens ad.' , 
    //     textArray
    // );
    // t_14200 = new Text (
    //     /* textKey:  */ 't_14200',          // 
    //     /* textName: */ 'accents',          // 
    //     /* pgTopic:  */ 'diceret diceret',          // 
    //     /* pgText:   */ 'Eum ne maiorum referrentur, et eos brute adolescens. Omnis soleat erroribus est in, eos eu diceret pertinax. Eu mei essent posidonium, in erant petentium cum. Mei id feugait interpretaris, usu vide assum audire id. Te usu eruditi dolores electram, diceret tibique in sit.'  , 
    //     textArray
    // );
    // t_14110 = new Text (
    //     /* textKey:  */ 't_14110',          // 
    //     /* textName: */ 'key',          // 
    //     /* pgTopic:  */ 'Camera ullum',          // 
    //     /* pgText:   */ 'Cum erat fugit oratio cu, eos ei wisi ullum. Eam ex tale dicam, diam persius suscipit an nam, ad mei erroribus maluisset. Ius ne dicant aeterno inciderint, vim ea case ullum. Vel accusata abhorreant et. Vis an officiis fabellas, mea eros vivendo adolescens ad.' , 
    //     textArray
    // );
    // t_14120 = new Text (
    //     /* textKey:  */ 't_14120',          // 
    //     /* textName: */ 'backlight',          // 
    //     /* pgTopic:  */ 'eruditi Intro',          // 
    //     /* pgText:   */ 'Te usu eruditi dolores electram, diceret tibique in sit. Cum erat fugit oratio cu, eos ei wisi ullum. Eam ex tale dicam, diam persius suscipit an nam, ad mei erroribus maluisset. Ius ne dicant aeterno inciderint, vim ea case ullum. Vel accusata abhorreant et. Vis an officiis fabellas, mea eros vivendo adolescens ad.' , 
    //     textArray
    // );
    // t_14130 = new Text (
    //     /* textKey:  */ 't_14130',          // 
    //     /* textName: */ 'fill',          // 
    //     /* pgTopic:  */ 'Camera Intro',          // 
    //     /* pgText:   */ 'Eum ne maiorum referrentur, et eos brute adolescens. Omnis soleat erroribus est in, eos eu diceret pertinax. Eu mei essent posidonium, in erant petentium cum. Eam ex tale dicam, diam persius suscipit an nam, ad mei erroribus maluisset. Ius ne dicant aeterno inciderint, vim ea case ullum. Vel accusata abhorreant et. Vis an officiis fabellas, mea eros vivendo adolescens ad.'  , 
    //     textArray
    // );
    // t_14100 = new Text (
    //     /* textKey:  */ 't_14100',          // 
    //     /* textName: */ 'threePtLighting',          // 
    //     /* pgTopic:  */ 'eruditi eruditi',          // 
    //     /* pgText:   */ 'Eum ne maiorum referrentur, et eos brute adolescens. Omnis soleat erroribus est in, eos eu diceret pertinax. Eu mei essent posidonium, in erant petentium cum. Eam ex tale dicam, eruditi persius suscipit an nam, ad mei erroribus maluisset. Ius ne dicant aeterno inciderint, vim ea case ullum. Vel accusata abhorreant et.' , 
    //     textArray
    // );
    // t_14000 = new Text (
    //     /* textKey:  */ 't_14000',          // 
    //     /* textName: */ 'faces',          // 
    //     /* pgTopic:  */ 'vim ea case',          // 
    //     /* pgText:   */ 'Eam ex tale dicam, diam persius suscipit an nam, ad mei erroribus maluisset. Ius ne dicant aeterno inciderint, vim ea case ullum. Vel accusata abhorreant et. Vis an officiis fabellas, mea eros vivendo adolescens ad.Mei id feugait interpretaris, usu vide assum audire id. Te usu eruditi dolores electram, diceret tibique in sit. Cum erat fugit oratio cu, eos ei wisi ullum. Eam ex tale dicam, diam persius suscipit an nam, ad mei erroribus maluisset. Ius ne dicant aeterno inciderint, vim ea case ullum. Vel accusata abhorreant et. Vis an officiis fabellas, mea eros vivendo adolescens ad.' , 
    //     textArray
    // );
    // t_15100 = new Text (
    //     /* textKey:  */ 't_15100',          // 
    //     /* textName: */ 'atmosphere',          // 
    //     /* pgTopic:  */ 'Camera Intro',          // 
    //     /* pgText:   */ 'Eum ne maiorum referrentur, et eos brute adolescens. Omnis soleat erroribus est in, eos eu diceret pertinax. Eu mei essent posidonium, in erant petentium cum. Mei id feugait interpretaris, usu vide assum audire id. Te usu eruditi dolores electram, diceret tibique in sit. Cum erat fugit oratio cu, eos ei wisi ullum. ', 
    //     textArray
    // );
    // t_15000 = new Text (
    //     /* textKey:  */ 't_15000',          // 
    //     /* textName: */ 'backgrounds',          // 
    //     /* pgTopic:  */ 'posidonium tibique',          // 
    //     /* pgText:   */ 'Eam ex tale dicam, diam persius suscipit an nam, ad mei erroribus maluisset. Ius ne dicant aeterno inciderint, vim ea case ullum. Vel accusata abhorreant et. Vis an officiis fabellas, mea eros vivendo adolescens ad. Eum ne maiorum referrentur, et eos brute adolescens. Omnis soleat erroribus est in, eos eu diceret pertinax. Eu mei essent posidonium, in erant petentium cum. Mei id feugait interpretaris, usu vide assum audire id. Te usu eruditi dolores electram, diceret tibique in sit. Cum erat fugit oratio cu, eos ei wisi ullum. Eam ex tale dicam, diam persius suscipit an nam, ad mei erroribus maluisset. Ius ne dicant aeterno inciderint, vim ea case ullum. Vel accusata abhorreant et. Vis an officiis fabellas, mea eros vivendo adolescens ad.' , 
    //     textArray
    // );
    // t_10000 = new Text (
    //     /* textKey:  */ 't_10000',          // 
    //     /* textName: */ 'approach',          // 
    //     /* pgTopic:  */ 'maiorum Intro',          // 
    //     /* pgText:   */ 'Eum ne maiorum referrentur, et eos brute adolescens. Omnis soleat erroribus est in, eos eu diceret pertinax. Eu mei essent posidonium, in erant petentium cum. Mei id feugait interpretaris, usu vide assum audire id. Te usu eruditi dolores electram, diceret tibique in sit. Cum erat fugit oratio cu, eos ei wisi ullum. ' , 
    //     textArray
    // );
    // t_SHOP = new Text (
    //     /* textKey:  */ 't_SHOP',          // 
    //     /* textName: */ 'SHOP',          // 
    //     /* pgTopic:  */ 'Shop text title',          // 
    //     /* pgText:   */ 'Mei id feugait interpretaris, usu vide assum aud shop page text.', 
    //     textArray
    // );
    // t_STUDIO = new Text (
    //     /* textKey:  */ 't_STUDIO',          // 
    //     /* textName: */ 'STUDIO',          // 
    //     /* pgTopic:  */ 'Studio Page Instructions',          // 
    //     /* pgText:   */ 'Page text for Studio page instructions ius ne dicant aeterno inciderint, vim ea cas.', 
    //     textArray
    // );
    // t_Lights = new Text (
    //     /* textKey:  */ 't_Lights',          // 
    //     /* textName: */ 'Lights',          // 
    //     /* pgTopic:  */ 'Lights Topic',          // 
    //     /* pgText:   */ 'txt', 
    //     textArray
    // );
    // t_distance = new Text (
    //     /* textKey:  */ 't_distance',          // 
    //     /* textName: */ 'distance',          // 
    //     /* pgTopic:  */ 'Intensity and Distance',          // 
    //     /* pgText:   */ 'Distance of light from subject changes intensity basd on inverse square law.', 
    //     textArray
    // );
    // t_SETUP = new Text (
    //     /* textKey:  */ 't_SETUP',          // 
    //     /* textName: */ 'SETUP',          // 
    //     /* pgTopic:  */ 'SETUP text title',          // 
    //     /* pgText:   */ 'Mei id feugait interpretaris, usu vide assum aud shop page text.', 
    //     textArray
    // );
    // t_HMIs = new Text (
    //     /* textKey:  */ 't_HMIs',          // 
    //     /* textName: */ 'HMIs',          // 
    //     /* pgTopic:  */ 'HMIs Topic',          // 
    //     /* pgText:   */ 'txt', 
    //     textArray
    // );

