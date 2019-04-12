let empleados = [{
        id: 1,
        nombre: 'Fernando',
    },
    {
        id: 2,
        nombre: 'Melissa',
    }, {
        id: 3,
        nombre: 'Juan',
    }
];

let salarios = [{
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        nombre: 2000,
    }
];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }

    });

}

let getSalario = (empleado) => {
    return new Promise();
}

getEmpleado(10).then(empleado => {
    console.log('Empleado de BD', empleado);

    getSalario(empleado.then(resp => {
        console.log()
    }))

}, (err) => {
    console.log(err);
});