const addStudent = async (req, res) => {
    res.send("Add Student");
}

const editStudent = async (req, res) => {
    res.send("Edit Student");
}

const deleteStudent = async (req, res)  => {
    res.send("Delete Student");
}

export {addStudent, editStudent, deleteStudent};