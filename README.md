# checklist
features to add:

console commands to:
    add assignment
        - walk through the user for adding an assignment:
        - list classes
            - if class isn't already listed, student can add new class

    complete assignment
    remove assignment
    go to new quarter
        - print statistics for that quarter, 
        - create a new assignment identifier, the database will probably look like this:
        [  {
            year: '18_19',
            current_term: 'fall'
            fall: {
                early_points: 0
                completed: []
                todo: []
                },
            winter: ...
            spring: ...
            summer: ...
            },
            ...
        ]
