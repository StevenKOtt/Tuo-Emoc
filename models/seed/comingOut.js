const mongoose = require('mongoose');
const comingOutSeed = require("../schemas/closetedIn.js")
const comingOutSeedArr = [
    {
      user: 'stevenkarlott@gmail.com' ,
      subject: 'What do I do',
      body: 'tpat lacus libero, sit amet pellentesque nulla malesuada sed. Pellentesque consequat tincidunt justo auctor faucibus. Praesent venenatis enim a est posuere, a fringilla augue tristique. Praesent eget elit eget quam mattis consectetur non in odio. Nulla bibendum, leo sed lacinia accumsan, orci neque iaculis nisl, id dapibus tellus ligula in nunc. Mauris fermentum condimentum turpis, consectetur dictum metus auctor ornare. Pellentesque nunc nisi, mollis a libero id, hendrerit convallis felis. Phasellus ac faucibus risus, vitae pellentesque odio.',
      identity: 'Trans',
      age: 35,
      date_submitted: '2020-2-09'
    }, {
        user: 'StevenkOtt@icloud.com' ,
        subject: 'Can you help me with my mom?',
        body: 'Aenean urna lorem, tempor vitae magna quis, maximus pulvinar elit. Proin sed accumsan tellus, quis consequat arcu. Phasellus sapien ex, fermentum at placerat vel, viverra a ipsum. Praesent nunc lacus, tincidunt quis consectetur nec, ullamcorper sed lorem. Quisque sed consequat massa. In diam turpis, egestas id rhoncus finibus, dictum pulvinar lectus. Proin lorem tortor, consequat facilisis risus non, posuere dignissim erat. Proin tempor metus ac libero pretium, ut auctor tortor vehicula. ',
        identity: 'Bi',
        date_submitted: '2002-3-09'
      }, {
        user: 'stevenphottography@gmail.com' ,
        subject: 'Should I be scared?',
        body: 'Fusce mattis erat nec dignissim lacinia. Aliquam vitae justo at lorem luctus malesuada hendrerit lobortis leo. Donec neque neque, sagittis ut lacus et, hendrerit interdum ipsum. Vestibulum id tortor dignissim purus pellentesque fermentum nec sit amet elit. Vestibulum suscipit dignissim velit, vel tincidunt risus egestas non. Quisque vitae lacinia ipsum, eget malesuada libero. Nunc vitae elit at tortor vestibulum condimentum ac quis lorem. Nulla vehicula metus sit amet neque pretium sollicitudin. Fusce mattis erat nec dignissim lacinia. Aliquam vitae justo at lorem luctus malesuada hendrerit lobortis leo. Donec neque neque, sagittis ut lacus et, hendrerit interdum ipsum. Vestibulum id tortor dignissim purus pellentesque fermentum nec sit amet elit. Vestibulum suscipit dignissim velit, vel tincidunt risus egestas non. Quisque vitae lacinia ipsum, eget malesuada libero. Nunc vitae elit at tortor vestibulum condimentum ac quis lorem. Nulla vehicula metus sit amet neque pretium sollicitudin. ',
//         identity: 'Gay',
        age: 25,
        date_submitted: '2019-6-09'
      },
      {
        user: 'StevenkOtt@icloud.com' ,
        subject: 'People make fun of me',
        body: 'Aenean urna lorem, tempor vitae magna quis, maximus pulvinar elit. Proin sed accumsan tellus, quis consequat arcu. Phasellus sapien ex, fermentum at placerat vel, viverra a ipsum. Praesent nunc lacus, tincidunt quis consectetur nec, ullamcorper sed lorem. Quisque sed consequat massa. In diam turpis, egestas id rhoncus finibus, dictum pulvinar lectus. Proin lorem tortor, consequat facilisis risus non, posuere dignissim erat. Proin tempor metus ac libero pretium, ut auctor tortor vehicula. ',
        identity: 'Bi',
        date_submitted: '2002-3-09'
      }, {
        user: 'stevenphottography@gmail.com' ,
        subject: 'I think I can tell my mom',
        body: 'Fusce mattis erat nec dignissim lacinia. Aliquam vitae justo at lorem luctus malesuada hendrerit lobortis leo. Donec neque neque, sagittis ut lacus et, hendrerit interdum ipsum. Vestibulum id tortor dignissim purus pellentesque fermentum nec sit amet elit. Vestibulum suscipit dignissim velit, vel tincidunt risus egestas non. Quisque vitae lacinia ipsum, eget malesuada libero. Nunc vitae elit at tortor vestibulum condimentum ac quis lorem. Nulla vehicula metus sit amet neque pretium sollicitudin. Fusce mattis erat nec dignissim lacinia. Aliquam vitae justo at lorem luctus malesuada hendrerit lobortis leo. Donec neque neque, sagittis ut lacus et, hendrerit interdum ipsum. Vestibulum id tortor dignissim purus pellentesque fermentum nec sit amet elit. Vestibulum suscipit dignissim velit, vel tincidunt risus egestas non. Quisque vitae lacinia ipsum, eget malesuada libero. Nunc vitae elit at tortor vestibulum condimentum ac quis lorem. Nulla vehicula metus sit amet neque pretium sollicitudin. ',
        identity: 'Gay',
        age: 25,
        date_submitted: '2019-6-09'
      }
      ,{
        user: 'StevenkOtt@icloud.com' ,
        subject: 'uh oh',
        body: 'Aenean urna lorem, tempor vitae magna quis, maximus pulvinar elit. Proin sed accumsan tellus, quis consequat arcu. Phasellus sapien ex, fermentum at placerat vel, viverra a ipsum. Praesent nunc lacus, tincidunt quis consectetur nec, ullamcorper sed lorem. Quisque sed consequat massa. In diam turpis, egestas id rhoncus finibus, dictum pulvinar lectus. Proin lorem tortor, consequat facilisis risus non, posuere dignissim erat. Proin tempor metus ac libero pretium, ut auctor tortor vehicula. ',
        identity: 'Bi',
        date_submitted: '2002-3-09'
      }, {
        user: 'stevenphottography@gmail.com' ,
        subject: 'grrrr!',
        body: 'Fusce mattis erat nec dignissim lacinia. Aliquam vitae justo at lorem luctus malesuada hendrerit lobortis leo. Donec neque neque, sagittis ut lacus et, hendrerit interdum ipsum. Vestibulum id tortor dignissim purus pellentesque fermentum nec sit amet elit. Vestibulum suscipit dignissim velit, vel tincidunt risus egestas non. Quisque vitae lacinia ipsum, eget malesuada libero. Nunc vitae elit at tortor vestibulum condimentum ac quis lorem. Nulla vehicula metus sit amet neque pretium sollicitudin. Fusce mattis erat nec dignissim lacinia. Aliquam vitae justo at lorem luctus malesuada hendrerit lobortis leo. Donec neque neque, sagittis ut lacus et, hendrerit interdum ipsum. Vestibulum id tortor dignissim purus pellentesque fermentum nec sit amet elit. Vestibulum suscipit dignissim velit, vel tincidunt risus egestas non. Quisque vitae lacinia ipsum, eget malesuada libero. Nunc vitae elit at tortor vestibulum condimentum ac quis lorem. Nulla vehicula metus sit amet neque pretium sollicitudin. ',
        identity: 'Gay',
        age: 25,
        date_submitted: '2019-6-09'
      }
  ]

 comingOutSeed.create(comingOutSeedArr, (err, data) => {
     console.log(data)
})
