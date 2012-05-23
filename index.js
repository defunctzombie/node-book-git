
module.exports = function(opt) {

    var git_id = null;

    // load git commit id
    // this is done async, which means anything logged before loaded won't
    // have a git id.
    // In practice this isn't much of a problem as the things we want to log are
    // generally not right at startup
    require('child_process').exec('cd ' + __dirname + ' && git rev-parse HEAD',
        function(err, stdout, stderr) {
        if (err) {
            return process.stderr.write(err + '\n');
        }
        git_id = stdout.trim();
    });

    // return the actual middleware
    return function() {
        var entry = this;
        entry.commit = git_id;
    }

};
