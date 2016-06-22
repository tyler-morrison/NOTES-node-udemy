// We use this file as a pattern for avoiding ‘magic string issues’.
// Basically, it is a common file with all of our events listed in one concise location...
module.exports = {
  events: {
    // Use the all caps pattern to ensure others know that it is an event
    GREET: 'greet',
    FILESAVED: 'filesaved',
    FILECLOSED: 'fileclosed'
  }
}
