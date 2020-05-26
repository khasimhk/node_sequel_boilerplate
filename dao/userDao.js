// generalized Crud operation 

// get operation 
const getUserInfo = async (modal, criteria) => {
    const user = await modal.findOne({
        where: criteria
    })
    return user;
}

// Create operation 
const createUser = async (modal, payload) => {
    const user = await modal.create(payload)
    return user;
}

// update operation
const update = async (modal, payload, criteria) => {
    // eslint-disable-next-line no-undef
    const updatedData = await modal.findOneAndUpdate(payload, criteria, options)
    return updatedData;
}

// delete operation
const deleteData = async (modal, criteria) => {
    const deletedData = await modal.findOneAndRemove(criteria)
    return deletedData;
}

export default {
    getUserInfo,
    createUser,
    update,
    deleteData,
};