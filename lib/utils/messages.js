const TIMEZONE = process.env.TIMEZONE

const footer = `> Powered by the ⚡️ [Serverless post scheduler](https://github.com/serverless/post-scheduler) | Made with ❤️  by [Serverless](https://serverless.com/)
`

const scheduledMsg = function(time, url) {
  return `✅ Post scheduled for **${formatTime(time)}**

**To unscheduled the post:**

1. **[Delete the previous comment ⬆](${url})** with schedule(time) information by clicking the ❌
  \`\`\`
  ┌──────────────────────────────────────────────┐
  │                                           X  │
  ├───────────────────────────────────────────▲──┤
  │                                           │  │
  │  schedule(mm/dd/yyyy h:mm A)   ┌────────┐ │  │
  │                                │ Delete ├─┘  │
  │                                └────────┘    │
  └──────────────────────────────────────────────┘
  \`\`\`
2. (Optionally) Delete this comment to keep things tidy

${footer}
`
}

const removedMsg = function(time) {
  return `⛔️ **The post has been unscheduled**

To reschedule, post a new comment below with an updated time ⬇

Format: **schedule(mm/dd/yyyy h:mm A)**

${footer}
`
}

const publishedMsg = function() {
  return `🎉 **The post has been published**

${footer}
`
}

const notAuthorizedMsg = function(userName) {
  return `🙈 Sorry ${userName}, you aren't authorized to schedule posts.

You must be a collaborator on this repository to schedule posts.

${footer}
`
}


function formatTime(time) {
  const timeArray = time.split(" ")
  const amPm = timeArray[2] || ''
  return `${timeArray[0]} at ${timeArray[1]}${amPm} (${TIMEZONE})`
}

module.exports = {
  scheduledMsg: scheduledMsg,
  removedMsg: removedMsg,
  publishedMsg: publishedMsg,
  notAuthorizedMsg: notAuthorizedMsg
}
