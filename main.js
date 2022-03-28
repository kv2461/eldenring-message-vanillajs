document.querySelector('.generate').addEventListener('click',generateFormat);

let count = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function generateFormat(){
    count++;
    if (count % 10 === 0){
        document.querySelector('.message').innerText = 'Try fingers\n but hole';
    } else {
        let format = getRandomInt(2);
            if (format === 0){
                let message = generateMessageShort();
                document.querySelector('.message').innerText = message;
            } else {
                let message = generateMessageLong();
                document.querySelector('.message').innerText = message;
            }
    }
}
const wordsArray = ['actions','affinities','battleTactics','bodyParts','concepts','directions','enemies','people','phrases','places','situations','things'];
const actionsArray = ['attacking','jump attack','running attack','critical hit','two-handing','blocking','parrying','guard counter','sorcery','incantation','skill','summoning','throwing','healing','running','rolling','backstepping','jumping','crouching','target lock','item crafting','gesturing'];
const affinitiesArray = ['physical','standard','striking','slashing','piercing','fire','lightning','magic','holy','poison','toxic','scarlet rot','blood loss','frost','sleep','madness','death'];
const battleTacticsArray = ['close-quarters battle','ranged battle','horseback battle','luring out','defeating one-by-one', 'luring out','defeating one-by-one','taking on all at once','rushing in','stealth','mimicry','confusion','pursuit','fleeing','summoning','circling around','jumping off','dashing through','brief respite'];
const bodyPartsArray = ['head','stomach','back','arms','legs','rump','tail','core','fingers'];
const conceptsArray = ['life','Death','light','dark','stars','fire','Order','chaos','joy','wrath','suffering','sadness','comfort','bliss','misfortune','good fortune','bad luck','hope','despair','victory','defeat','research','faith','abundance','rot','loyalty','injustice','secret','opportunity','pickle','clue','friendship','love','bravery','vigor','fortitude','confidence','distracted','unguarded','introspection','regret','resignation','futility','on the brink','betrayal','revenge','destruction','recklessness','calmness','vigilance','tranquility','sound','tears','sleep','depths','dregs','fear','sacrifice','ruin'];
const directionsArray = ['east','west','south','north','ahead','behind','left','right','center','up','down','edge'];
const enemiesArray = ['enemy','weak foe','strong foe','monster','dragon','boss','sentry','group','pack','decoy','undead','soldier','knight','cavalier','archer','sniper','mage','ordnance','monarch','lord','demi-human','outsider','giant','horse','dog','wolf','rat','beast','bird','raptor','snake','crab','prawn','octopus','bug','scarab','slug','wraith','skeleton','monstrosity','ill-omened creature'];
const peopleArray = ['Tarnished','warrior','swordfighter','knight','samurai','sorcerer','cleric','sage','merchant','teacher','master','friend','lover','old dear','old codger','angel','fat coinpurse','pauper','good sort','wicked sort','plump sort','skinny sort','lovable sort','pathetic sort','strange sort','nimble sort','laggardly sort','invisible sort','unfathomable sort','giant sort','sinner','thief','liar','dastard','traitor','pair','trio','noble','aristocrat','hero','champion','monarch','lord','god'];
const phrasesArray = ['good luck','look carefully','listen carefully','think carefully','well done','I did it!',"I've failed...",'here!','not here!',"don't you dare!",'do it!',"I can't take this...",'so lonely...','here again...','just getting started','keep moving','turn back','give up','help me...',"I don't believe it...",'too high up','I want to go home...',"it's like a dream....",'seems familiar...','beautiful...',"you don't have the right","are you ready?"];
const placesArray = ['high road','checkpoint','bridge','castle','fort','city','ruins','church','tower','camp site','house','cemetery','underground tomb','tunnel','cave','evergaol','great tree','cellar','surface','underground','forest','river','lake','bog','mountain','valley','cliff','waterside','nest','hole'];
const situationsArray = ['morning','noon','evening','night','clear sky','overcast','rain','storm','mist','snow','patrolling','procession','crowd','surprise attack','ambush','pincer attack','beating to a pulp','battle','reinforcements','ritual','explosion','high spot','defensible spot','climbable spot','crossable spot','bright spot','dark spot','open area','cramped area','hiding place','sniping spot','recon spot','danger','gorgeous view','detour','hidden path','secret passage','shortcut','dead end','locking away','unnoticed','out of stamina'];
const thingsArray = ['item','necessary item','precious item','something','something incredible','treasure chest','corpse','coffin','trap','armament','shield','bow','projectile weapon','armor','talisman','skill','sorcery','incantation','map','material','flower','grass','tree','fruit','seed','mushroom','tear','crystal','butterfly','bug','dung','grace','door','key','ladder','lever','lift','spiritspring','sending gate','stone astrolabe','Birdseye Telescope','message','bloodstain','Erdtree','Elden Ring']
const conjunctionsArray = ['and then','or','but','therefore','in short','except','by the way','so to speak','all the more',','];


function generateMessageShort(){
    let array = wordsArray[getRandomInt(wordsArray.length)];
    let word = ''
    if (array === 'actions'){
        word = actionsArray[getRandomInt(actionsArray.length)];
    } else if (array === 'affinities'){
        word = affinitiesArray[getRandomInt(affinitiesArray.length)];
    } else if (array === 'battleTactics'){
        word = battleTacticsArray[getRandomInt(battleTacticsArray.length)];
    } else if (array === 'bodyParts'){
        word = bodyPartsArray[getRandomInt(bodyPartsArray.length)];
    } else if (array === 'concepts'){
        word = conceptsArray[getRandomInt(conceptsArray.length)];
    } else if (array === 'directions'){
        word = directionsArray[getRandomInt(directionsArray.length)];
    } else if (array === 'enemies'){
        word = enemiesArray[getRandomInt(enemiesArray.length)];
    } else if (array === 'people'){
        word = peopleArray[getRandomInt(peopleArray.length)];
    } else if (array === 'phrases'){
        word = phrasesArray[getRandomInt(phrasesArray.length)];
    } else if (array === 'places'){
        word = placesArray[getRandomInt(placesArray.length)];
    } else if (array === 'situations'){
        word = situationsArray[getRandomInt(situationsArray.length)];
    } else if (array === 'things'){
        word = thingsArray[getRandomInt(thingsArray.length)];
    }
    const templatesArray = [`${word} ahead`,`No ${word} ahead`,`${word} required ahead`,`Be wary of ${word}`, `Try ${word}`, `Likely ${word}`,`First off, ${word}`,`Seek ${word}`,`Still no ${word}`,`Why is it always ${word}?`,`If I only had a ${word}...`,`Didn't expect ${word}...`,`Visions of ${word}...`,`Time for ${word}`,`${word}, O ${word}`,`Behold, ${word}!`,`Offer ${word}`,`Praise the ${word}!`,`Let there be ${word}`,`Ahh, ${word}...`,`${word}`,`${word}!`,`${word}?`,`${word}...`]
    return templatesArray[getRandomInt(templatesArray.length)];
}

function generateMessageLong(){
    let conjunction = conjunctionsArray[getRandomInt(conjunctionsArray.length)];
    let messageAlpha = generateMessageShort();
    let messageBeta = generateMessageShort();

    return `${messageAlpha}\n${conjunction} ${messageBeta}`
}