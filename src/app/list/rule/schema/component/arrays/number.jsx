import { Tag, InputNumber, Tooltip, Icon } from 'antd';
import React from 'react';

export default class EditableTagGroup extends React.Component {
  constructor(args) {
    super(args);

    ['handleClose', 'showInput', 'handleInputChange', 'handleInputConfirm', 'saveInputRef']
      .forEach((methodName) => {
        this[methodName] = this[methodName].bind(this);
      });
    this.state = {
      tags: [],
      inputVisible: false,
      inputValue: ''
    };
  }

  handleClose(removedTag) {
    const tags = this.state.tags.filter((tag) => tag !== removedTag);

    console.log(tags);
    this.setState({
      tags
    });
  }

  showInput() {
    this.setState({
      inputVisible: true
    }, () => this.input.focus());
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleInputConfirm() {
    const { state } = this;
    const { inputValue } = state;
    let { tags } = state;

    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ''
    });
  }

  saveInputRef(input) {
    this.input = input;
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;

    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );

          return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
        })}
        {inputVisible && (
          <InputNumber
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{
              width: 78
            }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{
              background: '#fff',
              borderStyle: 'dashed'
            }}
          >
            <Icon type="plus" />
          </Tag>
        )}
      </div>
    );
  }
}
