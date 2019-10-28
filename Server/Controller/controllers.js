let messages = [];
let userId = 0;

module.exports = {
  post: (req, res) => {
    console.log(req.body);
    let newMessages = { ...req.body, userId };
    ++userId;
    messages.push(newMessages);
    res.status(200).send(messages);
  },
  removeMessage: (req, res) => {
    let { userId } = req.params;
    let index = messages.findIndex(el => el.userId === +userId);
    messages.splice(index, 1);
    res.status(200).send(messages);
  },
  edit: (req, res) => {
    console.log(req.body.body);

    let { userId } = req.params;
    let { body } = req.body;
    let index = messages.findIndex(el => el.userId === +userId);
    messages[index].message = body;
    res.status(200).send(messages);
  },
  getMessages: (req, res) => {
    res.status(200).send(messages);
  }
};
