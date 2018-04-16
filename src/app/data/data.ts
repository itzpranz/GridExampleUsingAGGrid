export default class DATA {
    static COLUMN_DEF = [
        {
            headerName: 'Name',
            field: 'name',
            editable: false,
            pinned: null,
            suppressMovable: true
        },
        {
            headerName: 'Age',
            field: 'age',
            editable: false,
            pinned: null,
            suppressMovable: true
        },
        {
            headerName: 'Gender',
            field: 'gender',
            editable: false,
            pinned: null,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ['male', 'female']
            },
            suppressMovable: true
        },
        {
            headerName: 'Email',
            field: 'email',
            editable: false,
            pinned: null,
            suppressMovable: true
        },
        {
            headerName: 'Phone',
            field: 'phone',
            editable: false,
            pinned: null,
            suppressMovable: true
        }
    ];

    static DATA = [
        {
            '_id': '5acf43c1646862df2a0ec474',
            'index': 0,
            'guid': 'd6c02468-a121-459d-8303-5d840f1b916a',
            'isActive': false,
            'balance': '$3,744.81',
            'picture': 'http://placehold.it/32x32',
            'age': 38,
            'eyeColor': 'green',
            'name': 'Collins Robertson',
            'gender': 'male',
            'company': 'SONIQUE',
            'email': 'collinsrobertson@sonique.com',
            'phone': '+1 (819) 531-3257',
            'address': '891 Emerson Place, Balm, American Samoa, 5689',
            'registered': '2014-11-12T05:45:28 -06:-30',
            'latitude': -55.786687,
            'longitude': -105.414174
        },
        {
            '_id': '5acf43c17b40e6df78d4741c',
            'index': 1,
            'guid': 'a84d2a30-b9f1-4465-b7fe-686c30f3a3a0',
            'isActive': true,
            'balance': '$2,391.30',
            'picture': 'http://placehold.it/32x32',
            'age': 28,
            'eyeColor': 'green',
            'name': 'Mullen Beach',
            'gender': 'male',
            'company': 'NETUR',
            'email': 'mullenbeach@netur.com',
            'phone': '+1 (904) 461-3880',
            'address': '288 Raleigh Place, Herbster, Idaho, 5080',
            'registered': '2015-08-27T01:33:24 -06:-30',
            'latitude': 19.931583,
            'longitude': 5.919816
        },
        {
            '_id': '5acf43c197ea44c204d4b8d3',
            'index': 2,
            'guid': 'c0b97273-5cc5-4683-af0b-8ab20c83b424',
            'isActive': true,
            'balance': '$3,482.70',
            'picture': 'http://placehold.it/32x32',
            'age': 35,
            'eyeColor': 'green',
            'name': 'Sharon Meadows',
            'gender': 'female',
            'company': 'ASIMILINE',
            'email': 'sharonmeadows@asimiline.com',
            'phone': '+1 (887) 453-3831',
            'address': '205 Kensington Street, Driftwood, New Jersey, 8675',
            'registered': '2014-05-24T12:49:57 -06:-30',
            'latitude': -49.023412,
            'longitude': -138.17522
        },
        {
            '_id': '5acf43c16160d8c24af58bbc',
            'index': 3,
            'guid': 'd312f295-f754-4915-b636-c7dfa85201d2',
            'isActive': true,
            'balance': '$3,204.66',
            'picture': 'http://placehold.it/32x32',
            'age': 36,
            'eyeColor': 'brown',
            'name': 'Wood Carver',
            'gender': 'male',
            'company': 'VIRVA',
            'email': 'woodcarver@virva.com',
            'phone': '+1 (989) 499-3843',
            'address': '335 Clinton Avenue, Cliff, Delaware, 4105',
            'registered': '2017-08-11T12:41:47 -06:-30',
            'latitude': -9.656907,
            'longitude': -23.417871
        },
        {
            '_id': '5acf43c1dc98b50686b79383',
            'index': 4,
            'guid': '20d8b8b0-d162-46d7-8e7e-3e151720359b',
            'isActive': false,
            'balance': '$2,762.56',
            'picture': 'http://placehold.it/32x32',
            'age': 21,
            'eyeColor': 'green',
            'name': 'Santiago Chang',
            'gender': 'male',
            'company': 'BISBA',
            'email': 'santiagochang@bisba.com',
            'phone': '+1 (986) 590-2991',
            'address': '860 Tampa Court, Marienthal, Illinois, 8763',
            'registered': '2017-01-08T10:20:02 -06:-30',
            'latitude': -60.539827,
            'longitude': -123.999568
        }
    ];
}
