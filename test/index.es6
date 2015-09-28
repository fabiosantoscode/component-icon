import Icon from '../index.es6';

describe('Icon', () => {
  let icon;
  let renderedIcon;
  beforeEach(() => {
    icon = new Icon({
      icon: 'facebook',
      uri: '/test-icons.svg'
    });
    renderedIcon = icon.render();
  });
  it('Is an SVG pointing to the passed SVG URI', () => {
    renderedIcon.type.should.equal('svg');
    renderedIcon.props.dangerouslySetInnerHTML.__html.should.match(/xlink:href="\/test-icons.svg#facebook"/);
  });
  it('Has aria role and labelledby attributes', () => {
    renderedIcon.props.role.should.eql('img');
    renderedIcon.props['aria-labelledby'].should.eql('title');
    renderedIcon.props.dangerouslySetInnerHTML.__html.should.match(/<title id="title">facebook icon/i);
  });
});
