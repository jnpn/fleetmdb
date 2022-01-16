function StatFooter (prop) {
    return (<footer className="statfooter">
	    {[1,2,3].map(i => { return (<div><ul>
  <li>{i}</li>
  <li>{i}</li>
  <li>{i}</li>
</ul></div>) })}
	    </footer>);
}

export default StatFooter;
