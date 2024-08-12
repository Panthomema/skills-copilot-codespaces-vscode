function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 25,
    skills: ['HTML', 'CSS', 'JS'],
    // Add a new skill
    addSkill: function(skill) {
      this.skills.push(skill);
    },
    // Remove a skill
    removeSkill: function(skill) {
      this.skills = this.skills.filter(function(item) {
        return item !== skill;
      });
    }
  };

  return member;
}