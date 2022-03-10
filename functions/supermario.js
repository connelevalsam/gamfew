exports.handler = async () => {
    console.log('Function ran')

    const data = { name: 'Mario', age: 35, job: 'plumber' }
    // return response to browser
    let res = JSON.stringify(data)
    return {
        statusCode: 200,
        body: res,
    }
}