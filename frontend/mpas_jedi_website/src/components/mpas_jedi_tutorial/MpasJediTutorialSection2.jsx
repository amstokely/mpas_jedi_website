import '../../style/MpasJediTutorial.css'
import {Link} from "react-router-dom";
import Equation from "../Equation";
import CodeBlock from "../Markdown";
import hofx_pic from "../../assets/hofx_pic.png"


const MpasJediTutorialSection2 = () => {

    return (
        <div className={"MpasJediTutorial"}>
            <div className={"NavButton"}>
                <div className={"PreviousButton"}>
                    <Link to={"/tutorial/section1"}>
                        <button>Compiling/Testing MPAS-JEDI</button>
                    </Link>
                </div>
                <div className={"NextButton"}>
                    <Link to={"/tutorial/section3"}>
                        <button>Generating localization files and running 3D/4DEnVar conventional obs</button>
                    </Link>
                </div>
            </div>
            <div className={"content"}>
                <h1>Running MPAS-JEDI's HofX application</h1>
                <p>
                    In this session, we will be running an application called
                    <Equation inline={true}
                              equation={"H(x)"}/>.
                </p>
                <h2>Create a working directory and link files</h2>
                <p>
                    Creating hofx directory in mpas_jedi_tutorial,
                    <CodeBlock
                        value={
                            "cd /glade/derecho/scratch/${USER}/mpas_jedi_tutorial\n" +
                            "mkdir hofx\n" +
                            "cd hofx"
                        } language={"bash"}/>
                    Set environment variable for the mpas-bundle directory,
                    <CodeBlock
                        value={
                            "export bundle_dir=/glade/derecho/scratch/liuz/mpas_bundle_v3_public_gnuSP"
                        } language={"bash"}/>
                    Now, we need to prepare input files to run hofx. The following commands are for linking files, such
                    as, physics-related data and tables, MPAS graph, streams, and namelist files:

                    <CodeBlock
                        value={
                            "ln -fs ../MPAS_namelist_stream_physics_files/*TBL .\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/*DBL .\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/*DATA .\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/x1.10242.graph.info.part.64 .\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/namelist.atmosphere_240km .\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/streams.atmosphere_240km .\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.analysis .\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.background .\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.control .\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.ensemble ."
                        } language={"bash"}/>
                    Link yamls:
                    <CodeBlock
                        value={
                            "ln -fs ${bundle_dir}/code/mpas-jedi/test/testinput/namelists/geovars.yaml .\n" +
                            "ln -fs ${bundle_dir}/code/mpas-jedi/test/testinput/namelists/keptvars.yaml .\n" +
                            "ln -fs ${bundle_dir}/code/mpas-jedi/test/testinput/obsop_name_map.yaml ."
                        } language={"bash"}/>
                    Link MPAS 6-h forecast background file into template file and an MPAS invariant file for 2-stream
                    I/O:
                    <CodeBlock
                        value={
                            "ln -fs ../MPAS_namelist_stream_physics_files/x1.10242.invariant.nc .\n" +
                            "ln -fs ../background/2018041418/mpasout.2018-04-15_00.00.00.nc templateFields.10242.nc"
                        } language={"bash"}/>
                    Link the background and observation input files:
                    <CodeBlock
                        value={
                            "ln -fs ../background/2018041418/mpasout.2018-04-15_00.00.00.nc ./bg.2018-04-15_00.00.00.nc\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/aircraft_obs_2018041500.h5  .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/gnssro_obs_2018041500.h5  .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/satwind_obs_2018041500.h5  .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/sfc_obs_2018041500.h5  .\n" +
                            "ln -fs ../obs_ioda_pregenerated/2018041500/sondes_obs_2018041500.h5  ."
                        } language={"bash"}/>
                </p>
                <h2>Run HofX</h2>
                <p>
                    Link hofx3d.yaml and run_hofx3d.csh to the working directory:
                    <CodeBlock
                        value={
                            "ln -sf ../MPAS_JEDI_yamls_scripts/hofx3d.yaml .\n" +
                            "ln -sf ../MPAS_JEDI_yamls_scripts/run_hofx3d.csh ."
                        } language={"bash"}/>
                    Submit a PBS job to run hofx,

                    <CodeBlock
                        value={
                            "qsub run_hofx3d.csh"
                        } language={"bash"}/>
                    According to the setting in hofx3d.yaml, the output files are obsout_hofx_*.h5. You may check the
                    output file content using 'ncdump -h obsout_hofx_aircraft.h5'. you can also check hofx by running
                    plot_diag.py.
                    The following steps are for set up python environment, copy graphics directory, and run
                    plot_diag.py:

                    <CodeBlock value={
                        "module purge\n" +
                        "module reset\n" +
                        "module load conda\n" +
                        "conda activate npl\n" +
                        "cp -r ${bundle_dir}/code/mpas-jedi/graphics .\n" +
                        "cd graphics/standalone\n" +
                        "python plot_diag.py"
                    } language={"bash"}/>
                    This will produce a number of figure files, display one of them

                    <CodeBlock value={
                        "display distri_windEastward_hofx_aircraft_omb_allLevels.png"
                    } language={"bash"}/>
                    which will look like the figure below
                    <img src={hofx_pic} alt="HofX graphic" style={{
                        width: "50%",
                        height: "50%"
                    }}/>
                </p>
            </div>
        </div>
    );

}

export default MpasJediTutorialSection2;
