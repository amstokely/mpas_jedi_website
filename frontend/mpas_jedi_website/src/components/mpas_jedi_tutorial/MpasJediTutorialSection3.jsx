import '../../style/MpasJediTutorial.css'
import {Link} from "react-router-dom";
import CodeBlock from "../Markdown";
import bumploc from "../../assets/bumploc.png";


const MpasJediTutorialSection3 = () => {
    return (
        <div className={"MpasJediTutorial"}>
            <div className={"NavButton"}>
                <div className={"PreviousButton"}>
                    <Link to={"/tutorial/section2"}>
                        <button>Running MPAS-JEDI's HofX application</button>
                    </Link>
                </div>
                <div className={"NextButton"}>
                    <Link to={"/tutorial/section4"}>
                        <button>Running 3DVar and hybrid-3DEnVar with satellite radiance data</button>
                    </Link>
                </div>
            </div>
            <div className={"content"}>
                <h1> Generating localization files and running 3D/4DEnVar conventional obs</h1>
                <h2> Generating localization files and running 3D/4DEnVar conventional obs</h2>
                <p>
                    In this practice, we will generate the BUMP localization files to be used for spatial localization
                    of ensemble background error covariance. These files will be used in the following 3D/4DEnVar and
                    hybrid-3DEnVar data assimilation practice.

                    After changing to our
                    <CodeBlock
                        value={
                            "/glade/derecho/scratch/${USER}/mpas_jedi_tutorial"
                        } language={"bash"} inline={true}
                    />
                    directory, create the working directory.

                    <CodeBlock
                        value={
                            "cd /glade/derecho/scratch/$USER/mpas_jedi_tutorial\n" +
                            "mkdir localization\n" +
                            "cd localization"
                        } language={"bash"}
                    />
                    Set environment variable for the mpas-bundle directory,

                    <CodeBlock
                        value={
                            "export bundle_dir=/glade/derecho/scratch/liuz/mpas_bundle_v3_public_gnuSP"
                        } language={"bash"}
                    />
                    Link MPAS physics-related data and tables, MPAS graph, MPAS streams, MPAS namelist files.

                    <CodeBlock
                        value={
                            "ln -fs ../MPAS_namelist_stream_physics_files/*BL ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/*DATA ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/x1.10242.graph.info.part.64 ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/streams.atmosphere_240km ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.analysis ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.background ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.control ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/stream_list.atmosphere.ensemble ./\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/namelist.atmosphere_240km ./"
                        } language={"bash"}
                    />
                    Link MPAS 2-stream files.

                    <CodeBlock
                        value={
                            "ln -fs ../background/2018041418/mpasout.2018-04-15_00.00.00.nc ./\n" +
                            "ln -fs ../background/2018041418/mpasout.2018-04-15_00.00.00.nc ./templateFields.10242.nc\n" +
                            "ln -fs ../MPAS_namelist_stream_physics_files/x1.10242.invariant.nc ."
                        } language={"bash"}
                    />
                    Link yaml files.

                    <CodeBlock
                        value={
                            "ln -fs ${bundle_dir}/code/mpas-jedi/test/testinput/namelists/geovars.yaml ./\n" +
                            "ln -fs ${bundle_dir}/code/mpas-jedi/test/testinput/namelists/keptvars.yaml ./\n" +
                            "ln -fs ../MPAS_JEDI_yamls_scripts/bumploc.yaml ./"
                        } language={"bash"}
                    />
                    Link and submit pbs job script.

                    <CodeBlock
                        value={
                            "ln -sf ../MPAS_JEDI_yamls_scripts/run_bumploc.csh ./\n" +
                            "qsub run_bumploc.csh"
                        } language={"bash"}
                    />
                    User may check the PBS job status by running qstat -u $USER, or monitoring the log file jedi.log.

                    After finishing the PBS job, user can check the BUMP localization files generated. The "local" files
                    are generated for each processor (64 processors in this practice).

                    <CodeBlock
                        value={
                            "ls bumploc_1200km6km_nicas_local_*.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000001.nc bumploc_1200km6km_nicas_local_000064-000033.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000002.nc bumploc_1200km6km_nicas_local_000064-000034.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000003.nc bumploc_1200km6km_nicas_local_000064-000035.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000004.nc bumploc_1200km6km_nicas_local_000064-000036.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000005.nc bumploc_1200km6km_nicas_local_000064-000037.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000006.nc bumploc_1200km6km_nicas_local_000064-000038.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000007.nc bumploc_1200km6km_nicas_local_000064-000039.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000008.nc bumploc_1200km6km_nicas_local_000064-000040.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000009.nc bumploc_1200km6km_nicas_local_000064-000041.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000010.nc bumploc_1200km6km_nicas_local_000064-000042.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000011.nc bumploc_1200km6km_nicas_local_000064-000043.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000012.nc bumploc_1200km6km_nicas_local_000064-000044.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000013.nc bumploc_1200km6km_nicas_local_000064-000045.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000014.nc bumploc_1200km6km_nicas_local_000064-000046.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000015.nc bumploc_1200km6km_nicas_local_000064-000047.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000016.nc bumploc_1200km6km_nicas_local_000064-000048.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000017.nc bumploc_1200km6km_nicas_local_000064-000049.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000018.nc bumploc_1200km6km_nicas_local_000064-000050.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000019.nc bumploc_1200km6km_nicas_local_000064-000051.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000020.nc bumploc_1200km6km_nicas_local_000064-000052.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000021.nc bumploc_1200km6km_nicas_local_000064-000053.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000022.nc bumploc_1200km6km_nicas_local_000064-000054.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000023.nc bumploc_1200km6km_nicas_local_000064-000055.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000024.nc bumploc_1200km6km_nicas_local_000064-000056.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000025.nc bumploc_1200km6km_nicas_local_000064-000057.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000026.nc bumploc_1200km6km_nicas_local_000064-000058.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000027.nc bumploc_1200km6km_nicas_local_000064-000059.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000028.nc bumploc_1200km6km_nicas_local_000064-000060.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000029.nc bumploc_1200km6km_nicas_local_000064-000061.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000030.nc bumploc_1200km6km_nicas_local_000064-000062.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000031.nc bumploc_1200km6km_nicas_local_000064-000063.nc\n" +
                            "bumploc_1200km6km_nicas_local_000064-000032.nc bumploc_1200km6km_nicas_local_000064-000064.nc"
                        } language={"bash"}
                    />
                    For a Dirac function multiplied by a given localization function, user can make a plot with
                    dirac_nicas.2018-04-15_00.00.00.nc .

                    Note that we need to load the python environment before executing the python script. If you have
                    already loaded the spack-stack module, please reset the module environment to properly load the NCAR
                    Python Library (NPL).

                    <CodeBlock
                        value={
                            "module reset\n" +
                            "module load conda\n" +
                            "conda activate npl\n"
                        } language={"bash"}
                    />
                    Copy the plotting script for Dirac output.
                    <CodeBlock
                        value={
                            "cp ../MPAS_JEDI_yamls_scripts/plot_bumploc.py ./\n" +
                            "python plot_bumploc.py\n" +
                            "display figure_bumploc.png"
                        } language={"bash"}
                    />
                    Copy the plotting script for Dirac output.
                    <CodeBlock
                        value={
                            "cp ../MPAS_JEDI_yamls_scripts/plot_bumploc.py ./\n" +
                            "python plot_bumploc.py\n" +
                            "display figure_bumploc.png"
                        } language={"bash"}
                    />
                    <div style={{
                        display: "flex",
                        justifyContent: "left",
                        flexDirection: "column"
                    }}>
                        <img src={bumploc} alt={"bumploc"} style={{
                            width: "40vw"
                        }}
                        />
                    </div>
                </p>
            </div>
        </div>
    );
}

export default MpasJediTutorialSection3