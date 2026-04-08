(function executeRule(current, previous) {

    if (current.salary < 0) {
        gs.addErrorMessage("Salary cannot be negative");
        current.setAbortAction(true);
    }

})(current, previous);